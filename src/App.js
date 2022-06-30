import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Page/MainPage/MainPage'
import UsersPage from './Page/UsersPage/UsersPage'
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={MainPage}></Route>
					<Route path='/users' element={UsersPage}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
