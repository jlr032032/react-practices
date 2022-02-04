import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Button from './Button'
import '../card-styles.css'

function CardFooter() {
	const { theme: { background, fontColor } } = useContext(ThemeContext)
	return (
		<div
			className="card-footer"
			style={{ backgroundColor: background, color: fontColor }}
		>
			<Button />
		</div>
	)
}

export default CardFooter
