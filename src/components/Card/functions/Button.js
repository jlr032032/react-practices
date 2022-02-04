import { ThemeContext } from './ThemeContext'
import '../card-styles.css'

function Button() {
	return (
		<ThemeContext.Consumer>
			{ context => {
				const { theme: { foreground, fontColor }, toggleTheme } = context
				return (
					<button
						className="button"
						style={{ backgroundColor: foreground, color: fontColor }}
						onClick={ toggleTheme }
					>
						Alternar tema
					</button>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default Button
