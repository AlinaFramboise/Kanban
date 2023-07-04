import {LIST_COPY, LIST_TYPES} from '../../config.js'
import List from '../list/List'
import css from './Board.module.css'
import uuid from "react-uuid";
import {useState} from "react";

const Board = props => {
    const {tasks, setTasks} = props;
    const [list] = useState(Object.values(LIST_TYPES));

    const addTask = (title, description) => {
        let newTask = {
            id: uuid(),
            title: title,
            description: description,
            status: LIST_TYPES.BACKLOG,
        }
        setTasks([...tasks, newTask]);
    }

    const updateTask = (taskId, type) => {
        setTasks(tasks.map(task => {
            if (task.id !== taskId) {
                return task;
            }

            return {...task, status: type};
        }))
    }

    return <div className={css.board}>
        {list.map((type, idx) => {
            return <List
                key={idx}
                title={LIST_COPY[type]}
                type={type}
                tasks={tasks}
                addTask={addTask}
                updateTask={updateTask}
                width={100 / list.length || 1}
            />
        })}
    </div>

}

export default Board