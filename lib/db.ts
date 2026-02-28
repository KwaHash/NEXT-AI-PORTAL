import mysql, { type Connection } from 'mysql2/promise'

export async function withDatabase<T>(
  callback: (db: Connection) => Promise<T>
): Promise<T> {
  let db: Connection | null = null

  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST as string,
      user: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
    })

    await initializeDatabase(db)

    return await callback(db)
  } catch (error) {
    console.error('DB ERROR: ', error)
    throw error
  } finally {
    // Ensure the connection is always closed
    if (db) {
      await db.end()
    }
  }
}

async function initializeDatabase(db: Connection) {
  // users
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)
}