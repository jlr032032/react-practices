import ToDoHandlerClassComponent from '../components/ToDoList/classes/ToDoHandler'
import ToDoHandlerFunctionComponent from '../components/ToDoList/functions/ToDoHandler'

function ToDoListView() {
	return (
		<div>
			<h1> Lista de tareas </h1>
			<ToDoHandlerClassComponent />
			<ToDoHandlerFunctionComponent />
		</div>
	)
}

export default ToDoListView
