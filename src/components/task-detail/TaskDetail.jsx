import css from './TaskDetail.module.css'
import { useLocation } from 'react-router-dom';
import {LIST_TYPES, LIST_COPY, LIST_COLORS } from 'config';
import { useState } from 'react'


const TaskDetail = props => {
	const {tasks, setTasks} = props
	const match = useLocation()
	const {taskId} = match.params
	const [value, setValue] = useState('');
	const task = tasks.find(task => task.id === taskId)
	const [isOnfocus, setOnFocus] = useState(false)


	function changeDescription(e) {
		setTasks(tasks.map(task => {
			console.log(task)
            if (task.id === taskId) {
                return {...task, description: e.target.value};
            } else {
                return task;
            }
        }));
		setOnFocus(false)
	}


	return (<>
		<div className={css.wrapper}>
		
		{task ? (
			<>
				<div className={css.header}>
					<h2 className={css.title}>
						{task.title}
					</h2>
					<Link to='/' className={css.homeLink}>&#10005;</Link>
				</div>
				<p className={css.description}>
				{isOnfocus ?  <textarea value={value} onChange={event => setValue(event.target.value)} onBlur={changeDescription}  placeholder='Enter description' cols="30" rows="10" autoFocus  /> : <span onClick={() => setOnFocus(true)}>{task.description || 'This task has no description'}</span>}
				</p>
			</>
		) : (<>
			<div className={css.header}>
				<Link to='/' className={css.homeLink}>&#10005;</Link>
			</div>
			<h2 className={css.description}>
				Task {taskId} not found
			</h2>
			</>
		)}
		</div>
		</>
	)
}

export default TaskDetail