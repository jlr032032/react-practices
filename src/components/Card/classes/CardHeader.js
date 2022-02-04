import React from 'react'
import { ThemeContext } from './ThemeContext'
import '../card-styles.css'

class CardHeader extends React.Component {

	render() {
		const { fontColor, background } = this.context.theme
		return (
			<div
				className="card-header"
				style={{ backgroundColor: background, color: fontColor }}
			>
				Prueba de context
			</div>
		)
	}
	
}

CardHeader.contextType = ThemeContext

export default CardHeader
