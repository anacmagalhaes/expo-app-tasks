import { useSQLiteContext } from "expo-sqlite";

export type TaskDatabase = {
    id: number,
    title: string,
    description?: string,
    user_id: number,
    done: number,
    created_at: string
}

export function useTasksDatabase() {
    const database = useSQLiteContext();

    async function create(data: Omit<TaskDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO tasks (title, description, user_id, done, created_at) VALUES ($title, $description, $user_id, $done, $created_at)"
        );

        try {
            const result = await statement.executeAsync({
                $title: data.title,
                $description: data.description ?? null,
                $user_id: data.user_id,
                $done: data.done ?? 0,
                $created_at: data.created_at ?? new Date().toISOString()
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString();

            return { insertedRowId }
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function get() {
        try {
            const query = "SELECT * FROM tasks"

            const response = await database.getAllAsync<TaskDatabase>(query)

            return response
        } catch(error){
            throw error
        }
    }




    return { create, get }
}