import React from 'react'
import { Nav } from 'react-bootstrap'
function Menu() {
	return (
		<div>
			<Nav.Item>
				<Nav.Link href='/home'>Home page</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href='/user' >Users page</Nav.Link>
			</Nav.Item>
		</div>
	)
}

export default Menu