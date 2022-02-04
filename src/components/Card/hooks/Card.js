import { useState } from 'react'
import { ThemeContext, themes } from './ThemeContext'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import '../card-styles.css'

function Card() {
	const [ state, setState ] = useState({
		theme: themes.light,
		toggleTheme: () => {
			setState( oldState => ({
				theme: oldState.theme===themes.dark ? themes.light : themes.dark,
				toggleTheme: oldState.toggleTheme
			}))
		}
	})
	return (
		<ThemeContext.Provider value={ state }>
			<div className="card">
				<CardHeader />
				<CardBody />
				<CardFooter />
			</div>
		</ThemeContext.Provider>
	)
}

export default Card
