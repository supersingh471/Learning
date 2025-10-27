import { useContext, useState } from "react";
import { CountContext } from "./Context";

function App() {
	const [count, setCount] = useState(0);

		//Wrap anyone that wants to use the teleported value inside a Provider
	return (
		<div>
			<CountContext.Provider value={{count, setCount}}>
			<Count count= {count} setCount={setCount }/>
			</CountContext.Provider>
		</div>
	)
	
}

function Count() {

	return (
		<div>
			<CountRenderer/>
			<Button/>
		</div>
	)
}

function CountRenderer() {
	const {count, setCount} = useContext(CountContext);
	
	return <div>
		{count}
	</div>
}
function Button() {
	const {count, setCount} = useContext(CountContext);

	return (
		<div>
			<button onClick={()=> {
				setCount(count + 1);
			}}>Increase</button>
			<button onClick={() => {
				setCount(count - 1);
			}}>Decrease</button>
		</div>
	)
}

export default App;