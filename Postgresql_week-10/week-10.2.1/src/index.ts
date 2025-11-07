import { Client } from 'pg';

const client = new Client({
  connectionString: "postgresql://vikash:vikashsingh471@localhost:5432/week-10"
});

async function createUsersTable() {
  await client.connect(); // connect here 
  const result = await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log("Table created successfully");
  await client.end(); // always close the connection
}

createUsersTable();
