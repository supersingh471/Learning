import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));


function App() {
  
  return (
    <BrowserRouter>
	<Appbar/>
	<Suspense fallback={<div>Loading...</div>}>
		<Routes>
			<Route path="/dashboard" element={<Dashboard/>}></Route>
			<Route path="/" element={<Landing/>}></Route>
		</Routes>
		</Suspense>
    </BrowserRouter>
	
  )

  function Appbar() {
	const navigate = useNavigate();

  return <div>
	<div>
		<button onClick={() =>{
			navigate('/');
		}}>Landing</button>

		<button onClick={() =>{
			navigate('/dashboard');
		}}>Dashboard</button>
		</div>
	</div>
	}
}


export default App;
