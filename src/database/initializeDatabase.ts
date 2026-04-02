import { type SQLiteDatabase } from 'expo-sqlite';

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
        PRAGMA foreign_keys = ON;

        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER,
            done INTEGER DEFAULT 0,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );
    `)
}