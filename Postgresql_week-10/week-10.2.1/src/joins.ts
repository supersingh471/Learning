import client from "./db";

async function getData() {
	try{
		await client.connect();
		const res = await client.query(`
			SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
			FROM users u
			JOIN addresses a ON u.id = a.user_id
			WHERE u.id = 1`);
			console.log(res);
	}catch(error) {
		console.error("Error getting data:", error);
	}
}

getData();