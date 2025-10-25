import { useEffect, useState } from "react";
import React from "react";

function App() {
	const [render, setRender] = useState(true);

	useEffect(() => {
		setInterval(() => {
			setRender(r => !r);
		},5000)
	},[]);
  
	return (
		<>
		{render ? <MyComponent/> : <div></div> }
		</>
	)
		
}
/*
function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
	console.error("component mounted");

    return () => {
      // Cleanup code (similar to componentWillUnmount)
	  console.log("component unmounted");
    };
  }, []);

  // Render UI
  return <div>
	from inside my component
  </div>
}*/

class MyComponent extends React.Component {
 componentDidMount() {
 // Perform setup or data fetching here
	console.log("component mounted");
 }
 componentWillUnmount() {
 // Clean up (e.g., remove event listeners or cancel subscriptions)
	console.log("componentUnmounted");
 }
 render() {
 // Render UI
	
	return <div>Hi there</div>
 }
}



export default App
