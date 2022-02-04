import { ThemeContext } from './ThemeContext'
import '../card-styles.css'

function CardBody() {
	return (
		<ThemeContext.Consumer>
			{ context => {
				const { background, fontColor } = context.theme
				return (
					<div
						className="card-body"
						style={{ backgroundColor: background, color: fontColor }}
					>
						Esta prueba es para acceder a los datos asociados
						al tema (claro u oscuro) a través del context
					</div>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default CardBody
