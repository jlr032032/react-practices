import React from 'react'
import Button from './Button'
import { ThemeContext } from './ThemeContext'

class CardFooter extends React.Component {

	render() {
		const backgroundColor = this.context.theme.background
		return (
			<div
				className="card-footer"
				style={{ backgroundColor }}
			>
				<Button />
			</div>
		)
	}

}

CardFooter.contextType = ThemeContext

export default CardFooter
