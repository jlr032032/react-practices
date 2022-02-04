import { ThemeContext } from './ThemeContext'
import '../card-styles.css'

function CardHeader() {
	return (
		<ThemeContext.Consumer>
			{ context => {
				const { background, fontColor } = context.theme
				return (
					<div
						className="card-header"
						style={{ backgroundColor: background, color: fontColor }}
					>
						Prueba de context
					</div>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default CardHeader
