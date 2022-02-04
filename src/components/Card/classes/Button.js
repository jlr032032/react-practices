import React from 'react'
import { ThemeContext } from './ThemeContext'
import '../card-styles.css'

class Button extends React.Component {

	render() {
		const { theme: { fontColor, foreground }, toggleTheme } = this.context
		return (
			<button
				className="button"
				style={{ backgroundColor: foreground, color: fontColor }}
				onClick={ toggleTheme }
			>
				Alternar tema
			</button>
		)
	}

}

Button.contextType = ThemeContext

export default Button
