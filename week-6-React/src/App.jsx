import { useSetRecoilState, useRecoilValue } from "recoil";
import { RecoilRoot } from "recoil";
import { EvenSelector, countAtom } from "./store/atoms/count";
import React from 'react'; // This is necessary for Recoil internals

function App() {
	console.log("Rendering-App");
	return (
		<div>
			<RecoilRoot>
			<Count/>
			<EvenRendering/>
			</RecoilRoot>
		</div>
	);
	
}

function Count() {
	console.log("Rendering-Count");
	return (
		<div>
			<CountRenderer/>
			<Button/>
		</div>
	)
}

function EvenRendering() {
	const isEven = useRecoilValue(EvenSelector);
	console.log("Rendering-Even");

	return <div>
		{isEven ? "It is Even": null}
	</div>
}

function CountRenderer() {
	const count = useRecoilValue(countAtom);	
	console.log("Rendering-CountRenderer");

	return <div>
		{count}
	</div>
}
function Button() {
	const setCount = useSetRecoilState(countAtom);
	console.log("Rendering-Button")
	return (
		<div>
			<button onClick={()=> {
				setCount(count => count + 1)
			}}>Increase</button>
			<button onClick={() => {
				setCount(count => count - 1)
			}}>Decrease</button>
		</div>
	)
}

export default App;