import ClassCard from '../components/Card/classes/Card'
import FunctionCard from '../components/Card/functions/Card'
import HookCard from '../components/Card/hooks/Card'

function CardView () {

	return (
		<div>
			<h1> Card </h1>
			<div>
				<h3> Clase </h3>
				<ClassCard />
			</div>
			<div>
				<h3> Función </h3>
				<FunctionCard />
			</div>
			<div>
				<h3> Función con useContext </h3>
				<HookCard />
			</div>
		</div>
	)

}

export default CardView
