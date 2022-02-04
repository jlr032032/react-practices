import React from 'react'
import { ThemeContext } from './ThemeContext'
import '../card-styles.css'

class Card extends React.Component {

	render() {
		const { fontColor, background } = this.context.theme
		return (
			<div
				className="card-body"
				style={{ backgroundColor: background, color: fontColor }}
			>
				Esta prueba es para acceder a los datos asociados
				al tema (claro u oscuro) a través del context
			</div>
		)
	}

}

Card.contextType = ThemeContext

export default Card
