import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [clicker, setClicker] = useState("686918039935ec0014706198");

		return (
		<div>
			<button onClick={() => setClicker("686918039935ec0014706198")}>1</button>
			<button onClick={() => setClicker("68697d2738fc097ecb301cd2")}>2</button>
			<button onClick={() => setClicker("686accae828e29e1d202ffed")}>3</button>
			<button onClick={() => setClicker("686ad0a2932971af40193276")}>4</button>
		<Todo id={clicker}/>	
		</div>
	)
	
}

function Todo({id}) {
	const [todo, setTodos] = useState([]);
	
	useEffect(()=>{
		fetch(`http://localhost:3000/todos?id=${id}`)
		.then(async (res) => {
			const json = await res.json();
			setTodos(json.todo);
		})
	}, [id]);

	if(!todo) {
		return <div>
			Loading...
		</div>
	}
	
	return <div>
			<h1>{todo.title}</h1>
			<h5>{todo.description}</h5>
	</div>
}

export default App;