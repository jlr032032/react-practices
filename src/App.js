import { Link, Outlet } from 'react-router-dom'

function App() {
	return (
		<div>
			<nav style={{
				width: "200px",
				height: "100vh",
				backgroundColor: "#f0f0f0",
				position: "fixed"
			}}>
				<ul>
					<li><Link to="to-do-list"> To Do List </Link></li>
					<li><Link to="clock"> Clock </Link></li>
					<li><Link to="card"> Card </Link></li>
					<li><Link to="focusable-input"> Focusable Input </Link></li>
					<li><Link to="effect"> Effect </Link></li>
				</ul>
			</nav>
			<main style={{
				marginLeft: "200px",
				padding: "20px"
			}}>
				<Outlet />
			</main>
		</div>
	)
}

export default App
