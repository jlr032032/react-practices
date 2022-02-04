import React from 'react'

class Clock extends React.Component {

	constructor(props) {
		super(props)
		this.state = { time: null }
		this.timeoutId = null
	}

	componentDidMount() {
		this.tick()
	}

	componentWillUnmount() {
		clearTimeout(this.timeoutId)
	}

	tick() {
		const now = Date.now()
		const time = new Date(now).toLocaleTimeString()
		this.setState({ time })
		this.timeoutId = setTimeout( () => this.tick(), 1000-now%1000 )
	}

	render() {
		return (
			<div>
				<h3> Clase </h3>
				{ this.state.time }
			</div>
		)
	}

}

export default Clock
