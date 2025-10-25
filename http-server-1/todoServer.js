const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let todos = [];

app.get('/', (req, res) => {
	res.send("Todo API server is running!");
})


app.get('/todos', (req, res) => {
	res.json(todos);
});

app.get('/todos/:id', (req, res) => {
	const todo = todos.find(t => t.id === parseInt(req.params.id));
	if(!todo) {
		res.status(404).send();
	} else {
		res.json(todo);
	}
});

app.post('/todos',(req, res) => {
	const newTodo = {
		id:Math.floor(Math.random() * 1000000),  //unique random id
		title:req.body.title,
		description:req.body.description
	};
	todos.push(newTodo);
	res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
	const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
	if(todoIndex === -1) {
		res.status(404).send();
	} else {
		todos[todoIndex] = {
			...todos[todoIndex],
			title: req.body.title || todos[todoIndex].title,
			description: req.body.description || todos[todoIndex].description
		};
		res.status(200).json(todo[todoIndex]);
	}
});


app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if(todoIndex === -1) {
        res.status(404).send();
    } else {
        todos.splice(todoIndex, 1);
        res.status(200).send();
    }
});


//for all other routes, return 404
app.use((req, res, next) => {
	res.status(404).send();
});

app.listen(4000, () => {
	console.log('Server is running on port 4000');
});