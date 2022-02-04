import { useState } from 'react'

function TaskCreator(props) {
	let [ task, setTask ] = useState('')

	const handleChange = function(event) {
		setTask(event.target.value)
	}

	const handleClick = function() {
		props.onCreate(task)
		setTask('')
	}

	return (
		<div>
			<label> Nueva tarea: </label>
			<input 
				type="text"
				value={ task }
				onChange={ handleChange }
			/>
			<button onClick={ handleClick }> Agregar </button>
		</div>
	)
}

export default TaskCreator
