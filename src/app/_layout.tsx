import { initializeDatabase } from "@/database/initializeDatabase";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function Layout() {
    return (
        <SQLiteProvider databaseName="tasks.db" onInit={initializeDatabase}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="(tabs)" />
            </Stack>
        </SQLiteProvider>
    )
}