import { useEffect, useMemo, useState } from "react";

function App() {
	const [exchange1Data, setExchange1Data] = useState({});
	const [exchange2Data, setExchange2Data] = useState({});
	const [bankData, setBankData] = useState({});

	useEffect(() => {
		setTimeout(()=> {
			setExchange1Data({
				return: 100
			});
		})
	}, [])

	useEffect(() => {
		setTimeout(()=> {
			setExchange2Data({
				return: 100
			});
		})
	}, [])

	useEffect(() => {
		setTimeout(()=> {
			setBankData({
				return: 100
			});
		},5000)
	}, [])

	const cryptoReturns = useMemo(() => {
		
		return exchange1Data.return + exchange2Data.return;
	}, [exchange1Data, exchange2Data]);
	
	const incomeTax = (cryptoReturns + bankData.return) * 0.3;

	return (
		<div>
			Hi there, your income tax return are {incomeTax}
		</div>
	)
}

export default App;