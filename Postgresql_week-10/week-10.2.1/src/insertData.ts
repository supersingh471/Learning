// insert a new user into the database

import client from "./db";

async function insertUser() {
  try {
	await client.connect();
    const result = await client.query(`
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
	  ON CONFLICT (username) DO NOTHING
      RETURNING *;
    `, ["mrsingh", "mrsingh471@gmial.com", "123456"]
	);
	console.log("User inserted:", result.rows[0]);

	const addressRes = await client.query(`
		INSERT INTO addresses (user_id, city, country, street, pincode)
		VALUES ($1, $2, $3, $4, $5)
		RETURNING *
		`, [1, "Delhi", "India", "Sarita Vihar", 110076]
	);

    console.log("Address inserted:", addressRes.rows[0]);
  } catch (error) {
    console.error("Error inserting user:", error);
  }
}

insertUser();