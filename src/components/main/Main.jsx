import css from './Main.module.css'
import Board from '../board/Board'
import { Route, Routes } from 'react-router-dom'
import TaskDetail from '../task-detail/TaskDetail'

function Main ({ tasks, setTasks }) {

	

	return (
		<main className={css.main} >
			<Routes>
				<Route exact path={`/`}>
					<Board 
					tasks={tasks} 
					setTasks={setTasks}
					/>
				</Route>
				<Route path={`/tasks/:taskId`}>
					<TaskDetail
						tasks={tasks} 
						setTasks={setTasks}
						/>
				</Route>
			</Routes>

		</main>
	)
}

export default Main