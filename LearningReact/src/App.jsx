/*import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

function Assignment1() {
    const [input, setInput] = useState();
    // Your solution starts here
	const expensiveValue = useMemo(() => {
		let result = 1;
		for(let i = 2; i <= input; i++) {
			result *= i;
		}
		return result;
	},[input])
    //const expensiveValue = 0;
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}

export default Assignment1;	*/

import Accordion from "./features/accordion";

function App() {
	return (
		<>
			<Accordion/>
		</>
	)
}

export default App;