import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import '../card-styles.css'

function CardHeader() {
	const { theme: { background, fontColor } } = useContext(ThemeContext)
	return (
		<div
			className="card-header"
			style={{ backgroundColor: background, color: fontColor }}
		>
			Prueba de context
		</div>
	)
}

export default CardHeader
