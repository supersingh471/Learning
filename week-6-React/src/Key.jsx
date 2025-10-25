import { memo, Fragment, useState } from "react"

function App() {
	const [todos, setTodos] = useState([{
		id: 1,
		title: "Go to Gym",
		description: "Need to hit the from 7-8PM"
	}, {
		id: 2,
		title: "Go to Office",
		description: "Need to work from 10-7PM"
	}, {
		id: 3,
		title: "Go to Market",
		description: "Need to buy grocery"
	}])

	function addTodo() {
		setTodos([...todos, {
			id: todos.length + 1,
			title: Math.random(),
			description: Math.random()
		}])
	}
	return (
		<div>
			<button onClick={addTodo}>Add a Todo</button>
			{todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
		</div>
	)
	
}

//Component
function Todo({title, description}) {
		
	return (
		<div>
			<h1>{title}</h1>
			<h5>{description}</h5>
		</div>
	)
}
  
export default App
