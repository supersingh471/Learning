const express = require("express");

const app = express();


function OldEnoughMiddleware(req, res, next) {
	const age = req.query.age;
	if (age >= 14) {
		next();
	} else {
		res.json({
			msg: "Sorry you're not of age yet"
		});
	}
}

app.get("/ride1", OldEnoughMiddleware, function(req, res) {
	
	res.json({
		msg: "You've successfully riden the ride1"
	});
});

app.get("/ride2", OldEnoughMiddleware, function(req, res) {
	
	res.json({
		msg: "You've successfully riden the ride2"
	});
});

app.listen(3000);
console.log("Listening at port 3000");