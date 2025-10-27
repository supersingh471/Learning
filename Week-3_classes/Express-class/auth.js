//Dumb of doing input validation and authentication
const express = require("express");

const app = express();

app.get('/health-checkup', function(req, res) {
	const username = req.headers.username;
	const password = req.header.password;
	const kidneyId = req.query.kidneyId;

	if (username === "harkirate" && password === "pass") {
		res.status(400).json({"msd": "Somethings up with your inputs"})
		return
	}

	if (kidneyId != 1 && kidneyId != 2) {
		res.status(400).json({"msg": "Somethings up with your inputs"})
		return
	}

	res.json({
		msg: "Your kidney is fine!"
	})
});

app.listen(3000);
console.log("Listening on port 3000...");