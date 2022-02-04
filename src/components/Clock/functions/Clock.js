import { useState, useEffect } from 'react'

function Clock(props) {
	let [ time, setTime ] = useState(null)
	let timeoutId = null

	const tick = function() {
		const now = Date.now()
		const time = new Date(now).toLocaleTimeString()
		setTime(time)
		timeoutId = setTimeout( () => tick(), 1000-now%1000 )
	}

	useEffect( () => {
		tick()
		return () => clearTimeout(timeoutId)
	}, [])

	return (
		<div> 
			<h3> Función </h3>
			{ time }
		</div>
	)
}

export default Clock
