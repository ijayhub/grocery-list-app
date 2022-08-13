import React from 'react'
import Home from './components/Home'
// import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import CreatingGrocery from './components/CreatingGrocery';


const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='Login' element={<Login />} />
				<Route path='Signup' element={<Signup />} />
				<Route path='CreatingGrocery' element={<CreatingGrocery/>} />
			</Routes>
		</div>
	);
}

export default App