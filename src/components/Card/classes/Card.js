import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import { themes, ThemeContext } from './ThemeContext'
import '../card-styles.css'

class Card extends React.Component {

	constructor(props) {
		super(props)
		this.toggleTheme = () => {
			this.setState(state => {
				const theme = state.theme===themes.light ? themes.dark : themes.light
				return { theme }
			})
		}
		this.state = {
			theme: themes.light,
			toggleTheme: this.toggleTheme
		}
	}

	render() {
		return (
			<ThemeContext.Provider value={ this.state }>
				<div className="card">
					<CardHeader />
					<CardBody />
					<CardFooter />
				</div>
			</ThemeContext.Provider>
		)
	}

}

export default Card
