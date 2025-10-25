import { useMemo, useState } from "react";

function App() {
	const [counter, setCount] = useState(0);
	const [inputValue, setInputValue] = useState(1);

	let count = useMemo(() => {
		console.log("using UseMemo");
		let finalCount = 0;
	for(let i=1; i <=inputValue; i++) {
		finalCount = finalCount + i;
	}	
	return finalCount
	}, [inputValue]);
	
		return (
		<div>
			<input onChange={(e)=> {
				setInputValue(e.target.value);
			}} placeholder={"Find sum of 1 to n"}/>
			<p>Sum from 1 to {inputValue} is {count}</p>
			<button onClick={()=> {
				setCount(counter + 1);
			}}>Counter ({counter})</button>
		</div>
	);
}

export default App;