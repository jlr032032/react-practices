import React from 'react'

class TaskList extends React.Component {

	constructor(props) {
		super(props)
		this.deleteTask = this.deleteTask.bind(this)
	}

	deleteTask(index) {
		this.props.onDelete(index)
	}

	render() {
		return (
			<ul>
				{ this.props.tasks.map( (task, index) =>
					<li key={ index }>
						{ task }
						<button onClick={ () => this.deleteTask(index) }> &times; </button>
					</li>
				) }
			</ul>
		)
	}

}

export default TaskList
