import { useState } from 'react'
import css from './Forms.module.css'

const FormAddNewTask = props => {
	const {addNewTask, setFormVisible} = props
	const [values, setValues] = useState({
		title: '',
		description: ''
	})

	function handleSubmit(e) {
		e.preventDefault()
		if (values.title) {
			addNewTask(values.title, values.description)
		} else {
			alert('title is req')
		}
		setFormVisible(false)
	}

	function handleChange(e) {
		let fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='Enter task title'
				value={values.title}
				onChange={handleChange}
			/>
			
			<button className={css.submit} type='submit'>Submit</button>
		</form>
	)
}

export default FormAddNewTask