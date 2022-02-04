import { createContext } from 'react'

export const themes = {
	light: {
		background: '#f9f9fb',
		foreground: '#f0f0f0',
		fontColor: 'black'
	},
	dark: {
		background: '#2b2a33',
		foreground: '#1c1b22',
		fontColor: 'white'
	}
}

export const ThemeContext = createContext({
	theme: themes.light,
	toggleTheme: () => {}
})
