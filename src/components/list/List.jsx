import { useState } from 'react'
import { LIST_TYPES } from '../../config.js'
import { Link } from 'react-router-dom'
import FormAddNewTask from '../forms/FormAddNewTask'
import ChangeProgress from '../changeProgress/ChangeProgress'
import css from './List.css'


const List = props => {
	const {title, type, tasks, addNewTask, setTasks, fullTaskList, lists} = props
	const [isFormVisible, setFormVisible] = useState(false)
	const [isChangeVisible, setChange] = useState(false)
	// const [isButtonDisabled, setButtonDisabled] = useState(false)

	let cursorType = 'default';
	let isButtonDisabled = true;

	if (fullTaskList.length > 0) {
		isButtonDisabled = false;
	}

	if (!isButtonDisabled) {
		cursorType = 'pointer'
	}

	function handleClick() {
		setFormVisible(!isFormVisible)
	}



	

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map(task => {
				return (
					<Link to={`/tasks/${task.id}`} className={css.taskLink}>
						<div key={task.id} className={css.task}>
							{task.title}
						</div>
					</Link>
				)
			})}
			{type === LIST_TYPES.BACKLOG && isFormVisible && (
			<FormAddNewTask  addNewTask={addNewTask} setFormVisible={setFormVisible}/>
			)}
			{type === LIST_TYPES.BACKLOG  && (
			<button className={css.addButton} onClick={handleClick}>{isFormVisible ? '' : '+Add card'}</button>
			)}
			{type !== LIST_TYPES.BACKLOG  && isChangeVisible && (
			<ChangeProgress  tasks={fullTaskList} setTasks={setTasks} title={title} type={type} lists={lists} setChange={setChange} />
			)}
			{type !== LIST_TYPES.BACKLOG  && (<>
			<button className={css.addButton} onClick={() => setChange(true)} disabled={isButtonDisabled} style={{cursor: cursorType}}>{isChangeVisible ? '' : '+Add card'}</button>
			{/* не получается сделает disabled на кнопку */}
			</>
			)}
		</div>
	)
}
//  надо было разбивать листы на компоненты видимо

export default List