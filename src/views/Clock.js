import ClassClock from '../components/Clock/classes/Clock'
import FunctionClock from '../components/Clock/functions/Clock'

function ClockView() {
	return (
		<div>
			<h1> Reloj </h1>
			<ClassClock />
			<FunctionClock />
		</div>
	)
}

export default ClockView
