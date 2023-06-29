import { LIST_TYPES, LIST_COPY} from '../../config.js'
import List from '../list/List'
import css from './Board.module.css'
import { v4 as uuid } from 'react-uuid';

const Board = props => {
	const {tasks, setTasks} = props

	function addNewTask(title, description) {
		let newTask = {
			"id": uuid(),
			"title": title,
			"description": description,
			"created": new Date().toISOString(),
			"status": LIST_TYPES.BACKLOG,
		}
		setTasks([...tasks, newTask])
	}

	const lists = ['backlog', 'Ready', 'inProgress', 'Finished']
	return (<>
		<div className={css.board}>
			{Object.values(LIST_TYPES).map((type) => {
				const listTasks = tasks.filter(task => task.status === type)
				return (
					<List key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} addNewTask={addNewTask} fullTaskList={tasks} lists={lists}  setTasks={setTasks} />
				)
			})}
		</div>
	</>
	)

}

export default Board