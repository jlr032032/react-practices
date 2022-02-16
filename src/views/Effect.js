import { useState, useEffect } from 'react'

function handleClick(event, setClicked, clicked) {
	event.stopPropagation()
	setClicked(clicked+1)
}

function GrandChild() {
	const [ clicked, setClicked ] = useState(0)
	useEffect( () => console.log(`Grand Child effect run at ${Date.now()}`) )
	return (
		<div
	 		style={{ padding: '15px', border: 'solid black' }}
			onClick={ event => handleClick(event, setClicked, clicked) }
		>
			Grand child clicked {clicked} times
		</div>
	)
}

function Child() {
	const [ clicked, setClicked ] = useState(0)
	useEffect( () => console.log(`Child effect run at ${Date.now()}`) )
	return (
		<div
	 		style={{ padding: '15px', border: 'solid black' }}
			onClick={ event => handleClick(event, setClicked, clicked) }
		>
			Child clicked {clicked} times
			<GrandChild />
		</div>
	)
}

function Effect() {
	const [ clicked, setClicked ] = useState(0)
	useEffect( () => console.log(`Parent effect run at ${Date.now()}`) )
	return (
		<div
	 		style={{ padding: '15px', border: 'solid black' }}
			onClick={ event => handleClick(event, setClicked, clicked) }
		>
			Parent clicked {clicked} times
			<Child />
		</div>
	)
}

export default Effect