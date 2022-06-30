import { types } from '../types'

export const messageTrue = () => {
	return {
		type: types.MASSAGE_TRUE,
	}
}
export const messageFalse = () => {
	return {
		type: types.MASSAGE_FALSE,
	}
}
export const createUserAction = data => {
	return async function (dispatch) {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}

		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users',
			options
		)

		if (response.status === 404) {
			dispatch(messageTrue({ text: 'не создано', button: 'danger' }))
		} else {
			dispatch(messageTrue({ text: 'создано', button: 'success' }))
		}
		if (data.name === '') {
			console.log('NAME: пустое')
			dispatch(messageTrue({ text: 'ИМЯ: поле пустое', button: 'danger' }))
		}
		if (data.lastName === '') {
			console.log('LASTNAME: пустое')
			dispatch(messageTrue({ text: 'ФАМИЛИЯ: поле пустое', button: 'danger' }))
		}
		if (data.age === 0) {
			console.log('AGE: пустое')
			dispatch(messageTrue({ text: 'ВОЗРАСТ: поле пустое', button: 'danger' }))
		}
		if (data.email === '') {
			console.log('Email: пустое')
			dispatch(messageTrue({ text: 'EMAIL: поле пустое', button: 'danger' }))
		}
		if ((data.name, data.lastName, data.age, data.email === '')) {
			console.log('заполните поля')
			dispatch(messageTrue({ text: 'заполните поля', button: 'danger' }))
		}
	}
}
