// insert a new user into the database

import client from "./db";

async function insertUser(username: string, email: string, password: string) {
  try {
	await client.connect();
    const result = await client.query(`
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *
    `, [username, email, password]);

    console.log("User inserted:", result.rows[0]);
  } catch (error) {
    console.error("Error inserting user:", error);
  }
}

insertUser("mrsingh", "mrsingh471@gmial.com", "123456");