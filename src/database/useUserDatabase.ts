import { useSQLiteContext } from "expo-sqlite";

export type UserDatabase = {
    id: number,
    name: string,
    email: string,
    password: string
}

export function useUserDatabase() {
    const database = useSQLiteContext();

    async function create(data: Omit<UserDatabase, "id">){
        const statement = await database.prepareAsync(
            "INSERT INTO users (name, email, password) VALUES ($name, $email, $password)"
        );

        try{
            const result = await statement.executeAsync({
                $name: data.name, 
                $email: data.email,
                $password: data.password
            });

            const insertedRowId = result.lastInsertRowId.toLocaleString();
            
            return { insertedRowId }
        } catch (error){
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }


    return { create }
}