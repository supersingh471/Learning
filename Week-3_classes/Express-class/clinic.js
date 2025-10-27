const express = require("express");
const app = express();

const users = [{
	name: "John",
	kidneys: [{
		healthy: false
	}]
}];

app.use(express.json());

app.get("/", function(req, res) {
	const johnKidneys = users[0].kidneys;
	const numberofKidneys = johnKidneys.length;

	let numberofhealthykidneys = 0;
	for(let i = 0; i <johnKidneys.length; i++){
		if (johnKidneys[i].healthy) {

		numberofhealthykidneys = numberofhealthykidneys + 1
		}
	}
	const numberofUnhealthyKidneys = numberofKidneys - numberofhealthykidneys;

	res.json({
		numberofKidneys,
		numberofhealthykidneys,
		numberofUnhealthyKidneys
	})
})

app.post("/", function(req, res) {
	const isHealthy = req.body.isHealthy;

	users[0].kidneys.push({
		healthy: isHealthy
	})
-
	res.json({
		msg: "Added one healthy kidney!"
	})
})

app.put("/", function(req, res) {

	for(let i=0; i<users[0].kidneys.length; i++) {
		users[0].kidneys[i].healthy = true;
	}

	res.json({

		msg: "Done!"
	})
})

//remove all unhealthy kidneys
app.delete("/", function(req, res) {
	if(isThereAtleastOneUnhealthKidney()) {
		const newKidney = [];
		for(let i=0; i<users[0].kidneys.length; i++) {
			if(users[0].kidneys[i].healthy) {
				newKidney.push({
				healthy: true
				})
			}
		}
		users[0].kidneys = newKidney;
		res.json({msg: "Removed all unhealthy kidneys!"});

	}else {
		res.status(411).json({
			msg: "You have no bad kidneys"
		});
	}
})

function isThereAtleastOneUnhealthKidney() {
	let atleastOneUnhealthyKidney = false;
	for (let i=0; i<users[0].kidneys.length; i++) {
		if(!users[0].kidneys[i].healthy) {
			atleastOneUnhealthyKidney =true;
		}
	}

	return atleastOneUnhealthyKidney
}
app.listen(3000);
console.log("Listening to port 3000");