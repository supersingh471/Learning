import client from "./db";

async function createUsersTable() {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
	console.log("Users table created");
};

async function createAddressesTable() {
	await client.query(`
		CREATE TABLE IF NOT EXISTS addresses (
		id SERIAL PRIMARY KEY,
		user_id INTEGER REFERENCE users(id),
		city TEXT NOT NULL,
		country TEXT NOT NULL,
		street TEXT,
		pincode INTEGER,
		created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)
		`);
	console.log("Addresses table created");
}

async function init() {
  try {
    await client.connect();
    await createUsersTable();
    await createAddressesTable();
  } catch (err) {
    console.error("Error creating tables:", err);
  } finally {
    await client.end();
  }
}

init();