import { useEffect } from 'react'
import TaskForm from '../TaskForm/TaskForm'

import AddIcon from '@mui/icons-material/Add';

const TaskAction = ({ setAllTasks }) => {
    function addTaskLocalStorage(valuesInput) {

        function createLocalStorage() {
            JSON.parse(localStorage.getItem("todo")) == null
                ? localStorage.setItem("todo", JSON.stringify([]))
                : null
        }
        createLocalStorage()

        const keyValue = {
            id: crypto.randomUUID(),
            ...valuesInput,
            done: false
        }

        const allDataLocalStorage = JSON.parse(localStorage.getItem("todo"))
        localStorage.setItem("todo", JSON.stringify([...allDataLocalStorage, keyValue]))
        setAllTasks([...allDataLocalStorage, keyValue])
    }

    return (
        <div>
            <TaskForm
                inputIcon={<AddIcon />}
                inputTitle="Adicione sua tarefa"
                valuesForm={addTaskLocalStorage}
            />
        </div>
    )
}

export default TaskAction