import React from 'react'

class TaskCreator extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			newTask: ''
		}
		this.handleTaskChange = this.handleTaskChange.bind(this)
		this.handleTaskCreation = this.handleTaskCreation.bind(this)
	}

	handleTaskChange(event) {
		this.setState({ newTask: event.target.value })
	}

	handleTaskCreation() {
		const newTask = this.state.newTask.trim()
		if ( newTask ) {
			this.props.onCreate(newTask)
			this.setState({ newTask: '' })
		}
	}

	render() {
		return (
			<div>
				<label> Nueva tarea: </label>
				<input
					type="text"
					value={ this.state.newTask }
					onChange={ this.handleTaskChange }
				/>
				<button onClick={ this.handleTaskCreation }> Agregar </button>
			</div>
		)
	}

}

export default TaskCreator
