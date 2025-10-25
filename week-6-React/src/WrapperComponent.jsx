
function App() {

	return <div>
			<CardWrapper>
				<div>Hi there</div>
			</CardWrapper>

	</div>	
}

function CardWrapper({children}) {
	//create a div which has a border (hint: the way to create a border is border: "2px solid black")
	// and inside the div, rendere the prop

	return(
		<div style={{border: "2px solid black", padding: "10px"}}>
			{children}

		</div>
	)
}

export default App