const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', function(req, res) {

	const filedir = path.join(__dirname, 'files');
	fs.readdir(filedir, function(err, files) {
		if(err) {
			return res.status(500).json({error: "Unable to scan directory"});
		}
		else {
			res.json({
				files
			});
		}
	})
});

app.get('/files/a.txt', function(req, res) {
	const filedir = path.join(__dirname, 'files', 'a.txt');

	fs.readFile(filedir, "utf-8", function(err, data) {
		if(err) {
			return res.status(500).json({error: "Unable to scan directory"});	
		}
		else {
			res.json({
				data
			});
		}
	})
})
app.listen(3001); 
console.log("Listening on port 3001");