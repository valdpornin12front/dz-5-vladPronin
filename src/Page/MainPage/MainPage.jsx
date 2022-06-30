import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createUserAction } from '../../redux/action/actions'

function MainPage(props) {

	const dispatch = useDispatch()

	const [data, setData] = useState({
		name: '',
		lastName: '',
		age: 0,
		email: '',
	})

	const onChangeInput = e => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		})
	}

	const submint = (e)=>{
		e.preveDefauld()
		dispatch(createUserAction(data))
	}

	return (
		<div className='container pt-5 pb-5'>
			<div className='row'>
				<div className='col-3'>
					<Form.Group className='mb-3 w-100'>
						<Form.Label className='w-100'>
							Имя
							<Form.Control
								className='w-100'
								type='text'
								placeholder='Введите имя'
								name='name'
								onChange={onChangeInput}
								value={data.name}
							/>
						</Form.Label>
					</Form.Group>
				</div>

				<div className='col-3'>
					<Form.Group className='mb-3 w-100'>
						<Form.Label className='w-100'>
							Фамилия
							<Form.Control
								className='w-100'
								type='text'
								placeholder='Введите фамилию'
								name='lastName'
								onChange={onChangeInput}
								value={data.lastName}
							/>
						</Form.Label>
					</Form.Group>
				</div>

				<div className='col-3'>
					<Form.Group className='mb-3 w-100'>
						<Form.Label className='w-100'>
							Возраст
							<Form.Control
								className='w-100'
								type='number'
								placeholder='Введите возраст'
								name='age'
								onChange={onChangeInput}
								value={data.age}
							/>
						</Form.Label>
					</Form.Group>
				</div>

				<div className='col-3'>
					<Form.Group className='mb-3 w-100'>
						<Form.Label className='w-100'>
							Email
							<Form.Control
								className='w-100'
								type='email'
								placeholder='Введите email'
								name='email'
								onChange={onChangeInput}
								value={data.email}
							/>
						</Form.Label>
					</Form.Group>
				</div>

				<div className='col-3 offset-9'>
					<Button variant='primary' className='w-100'>
						Создать
					</Button>
				</div>
			</div>
		</div>
	)
}

export default MainPage
