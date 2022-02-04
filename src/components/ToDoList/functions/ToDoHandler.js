import { useState } from 'react'
import TaskCreator from './TaskCreator'
import TaskList from './TaskList'

function ToDoHandler(props) {
	let [ tasks, setTasks ] = useState([])

	const addTask = function(task) {
		setTasks(tasks.concat(task))
	}

	const deleteTask = function(index) {
		tasks = tasks.slice(0)
		tasks.splice(index, 1)
		setTasks(tasks)
	}

	return (
		<div id="to-do-handler">
			<h3> Función </h3>
			<TaskCreator onCreate={ addTask } />
			<TaskList
				tasks={ tasks }
				onDelete={ deleteTask }
			/>
		</div>
	)
}

export default ToDoHandler
