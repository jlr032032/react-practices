import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import ToDoList from './views/ToDoList'
import Clock from './views/Clock'
import Card from './views/Card'
import FocusableInput from './views/FocusableInput'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<App />}
				>
					<Route
						path="to-do-list"
						element={<ToDoList />}
					/>
					<Route
						path="clock"
						element={<Clock />}
					/>
					<Route
						path="card"
						element={<Card />}
					/>
					<Route
						path="focusable-input"
						element={<FocusableInput />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
