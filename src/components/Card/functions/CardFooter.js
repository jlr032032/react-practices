import { ThemeContext } from './ThemeContext'
import Button from './Button'
import '../card-styles.css'

function CardFooter() {
	return (
		<ThemeContext.Consumer>
			{ context => {
				const { background } = context.theme
				return (
					<div
						className="card-footer"
						style={{ backgroundColor: background }}
					>
					<Button />
				</div>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default CardFooter
