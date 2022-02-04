function TaskList(props) {
	const tasks = Array.isArray(props.tasks) ? props.tasks : []
	return (
		<ul>
			{ tasks.map( (task, index) =>
				<li key={ index } >
					{ task }
					<button onClick={ () => props.onDelete(index) }> &times; </button>
				</li>
			) }
		</ul>
	)
}

export default TaskList
