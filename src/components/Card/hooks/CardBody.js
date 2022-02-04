import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import '../card-styles.css'

function CardBody() {
	const { theme: { background, fontColor } } = useContext(ThemeContext)
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

export default CardBody
