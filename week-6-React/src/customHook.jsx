import { useEffect } from "react";
import { useState } from "react";

function useTodo() {
	const [todos, setTodos] = useState([]);

	useEffect(()=>{
		axios.get("http://localhost:3000")
		.then((res) => {
			setTodos(res.data.todos)
		})
	}, []);

	return todos;
}

function App() {
	const todos = useState();

	return <div>
		{todos}
	</div>
}

export default  App;