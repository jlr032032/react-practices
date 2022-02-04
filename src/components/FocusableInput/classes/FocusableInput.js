import { Component, createRef } from 'react'

class FocusableInput extends Component {

	constructor(props) {
		super(props)
		this.inputRef = createRef()
		this.focusInput = this.focusInput.bind(this)
	}

	focusInput() {
		this.inputRef.current.focus()
	}

	render() {
		return (
			<div>
				<h3> Clase </h3>
				<div>
					<input type="text" ref={ this.inputRef } />
					<button onClick={ this.focusInput }> Enfocar input </button>
				</div>
			</div>
		)
	}

}

export default FocusableInput
