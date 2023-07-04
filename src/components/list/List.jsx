import {useState} from 'react'
import {LIST_TYPES} from '../../config.js'
import {Link} from 'react-router-dom'
import FormAddNewTask from '../forms/FormAddNewTask'
import ChangeProgress from '../changeProgress/ChangeProgress'
import css from './List.module.css'


const List = ({title, type, tasks, addTask, updateTask, width}) => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [isChangeVisible, setIsChangeVisible] = useState(false);

    const filteredTasks = tasks.filter(task => task.status === type);

    function handleClick() {
        setFormVisible(!isFormVisible)
    }


    return (
        <div
            className={css.list}
            style={{
                width: `${width}%`
            }}
        >
            <h2 className={css.listTitle}>{title}</h2>
            <div className={css.tasks}>
                {filteredTasks
                    .map((task, idx) => <Link
                        key={idx}
                        to={`/tasks/${task.id}`}
                        className={css.taskLink}>
                        <div key={task.id} className={css.task}>
                            {task.title}
                        </div>
                    </Link>)}
            </div>
            {type === LIST_TYPES.BACKLOG && (isFormVisible
                ? <FormAddNewTask
                    addTask={addTask}
                    setFormVisible={setFormVisible}
                />
                : <button
                    onClick={handleClick}
                >
                    + Добавить карточку
                </button>)
            }
            {type !== LIST_TYPES.BACKLOG && (isChangeVisible
                ? <ChangeProgress
                    tasks={tasks}
                    type={type}
                    updateTask={updateTask}
                    setIsChangeVisible={setIsChangeVisible}
                />
                : <button
                    onClick={() => setIsChangeVisible(true)}
                    disabled={tasks.length === 0}
                >
                    + Переместить карточку
                </button>)
            }
        </div>
    )
}
//  надо было разбивать листы на компоненты видимо

export default List