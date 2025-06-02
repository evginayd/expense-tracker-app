import { neon } from "@neondatabase/serverless";
import "dotenv/config";

//Creates a SQL connection using out DB URL
export const sql = neon(process.env.DATABASE_URL);

// async means Don't start the server until the database is initialized!
export async function initDB() {
  try {
    await sql`	CREATE TABLE IF NOT EXISTS transactions(
      id SERIAL PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      category VARCHAR(255) NOT NULL,
      created_at DATE NOT NULL DEFAULT CURRENT_DATE)`;

    console.log("Database has been created");
  } catch (error) {
    console.log("Error at initilizing database", error.message);
    process.exit(1);
  }
}
