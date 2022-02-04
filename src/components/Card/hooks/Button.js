import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import '../card-styles.css'

function Button() {
	const { theme: { foreground, fontColor }, toggleTheme } = useContext(ThemeContext)
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

export default Button
