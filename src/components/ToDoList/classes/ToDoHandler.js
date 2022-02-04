import React from 'react'
import TaskCreator from './TaskCreator'
import TaskList from './TaskList'

class ToDoHandler extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			tasks: []
		}
		this.addTask = this.addTask.bind(this)
		this.deleteTask = this.deleteTask.bind(this)
	}

	addTask(newTask) {
		const tasks = this.state.tasks.concat(newTask)
		this.setState({ tasks })
	}

	deleteTask(taskIndex) {
		let tasks = this.state.tasks.slice(0)
		tasks.splice(taskIndex, 1)
		this.setState({ tasks })
	}

	render() {
		return (
			<div>
				<h3> Clase </h3>
				<TaskCreator onCreate={ this.addTask } />
				<TaskList
					tasks={ this.state.tasks }
					onDelete={ this.deleteTask }
				/>
			</div>
		)
	}

}

export default ToDoHandler
