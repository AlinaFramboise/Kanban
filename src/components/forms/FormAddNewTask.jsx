import css from './Forms.module.css'
import {useState} from 'react'

function FormAddNewTask(props) {

    const {addTask, setFormVisible} = props
    const [title, setTitle] = useState("")

    const onSubmit = () => {
        if (title.trim() === "") {
            return;
        }

        addTask(title);
        setFormVisible();
    }

    const onCancel = () => {
        setFormVisible();
    }

    const handleChange = ({target: {value}}) => {
        setTitle(value);
    }

    return <div className={css.form}>
        <input
            name='Название'
            placeholder='Введите название задачи'
            value={title}
            onChange={handleChange}
        />
        <div className={css.buttons}>
            <button
                className={css.submit}
                onClick={onSubmit}
                disabled={title.trim() === ""}
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

export default FormAddNewTask;