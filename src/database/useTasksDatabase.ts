import { useSQLiteContext } from "expo-sqlite";

export type TaskDatabase = {
    id: number,
    title: string,
    description?: string,
}

export function useTasksDatabase() {
    const database = useSQLiteContext();

    async function create(data: Omit<TaskDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO tasks (title, description) VALUES ($title, $description)"
        );

        try {
            const result = await statement.executeAsync({
                $title: data.title,
                $description: data.description ?? null,
            })

            return {
                id: Number(result.lastInsertRowId),
                title: data.title,
                description: data.description
            };

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
        } catch (error) {
            throw error
        }
    }




    return { create, get }
}