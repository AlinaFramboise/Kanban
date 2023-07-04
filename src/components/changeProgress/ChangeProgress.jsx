import React, {useState} from "react"
import css from '../task-detail/TaskDetail.module.css'


function ChangeProgress(props) {
    const {tasks, type, updateTask, setIsChangeVisible} = props;
    const initialOption = {value: "", title: "Выберите задачу"};
    const [selectedOption, setSelectedOption] = useState("");

    // const handleSelectChange = (e) => {
    //     const updatedTask = noFiltredTasks.map(task => {
    //         if (task.id === e.target.value) {
    //             return {...task, status: type}
    //         }
    //         return task
    //     })
    //     setTasks(updatedTask)
    //     handleSelectVisible(false)
    // }

    const onChangeTask = ({target: {value}}) => {
        setSelectedOption(value);
    }

    const onSubmit = () => {
        updateTask(selectedOption, type);
        setIsChangeVisible();
    }

    const onCancel = () => {
        setIsChangeVisible();
    }

    const options = [
        initialOption,
        ...tasks.filter(task => task.status !== type).map(task => ({
            value: task.id,
            title: task.title
        }))
    ]

    return <div className={css.form}>
        <select
            defaultValue={selectedOption}
            onChange={onChangeTask}
        >
            {options.map((option, idx) => <option
                key={idx}
                value={option.value}
            >
                {option.title}
            </option>)}
        </select>
        <div className={css.buttons}>
            <button
                className={css.submit}
                onClick={onSubmit}
                disabled={selectedOption === ""}
            >
                Сохранить
            </button>
            <button
                className={css.cancel}
                onClick={onCancel}
            >
                Отменить
            </button>
        </div>
    </div>
}


export default ChangeProgress;