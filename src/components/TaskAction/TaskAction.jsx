import { useEffect } from 'react'
import TaskForm from '../TaskForm/TaskForm'

import AddIcon from '@mui/icons-material/Add';
import { findDuplicateTask } from '../../utils/utils';

const TaskAction = ({ setAllTasks, allTasks }) => {

    function generatorId() {
        let maxId;
        const local = JSON.parse(localStorage.getItem("todo"))
        return local.length == 0 ? maxId = 1 : maxId = local.reduce((a, b) => a > b ? a : b).id += 1
    }

    function addTaskLocalStorage(valuesInput) {
        const isDuplicateTask = findDuplicateTask(allTasks, undefined, valuesInput)

        function createLocalStorage() {
            JSON.parse(localStorage.getItem("todo")) == null
                ? localStorage.setItem("todo", JSON.stringify([]))
                : null
        }
        createLocalStorage()

        if (isDuplicateTask) {
            alert("Já existe uma tarefa com esse nome na sua To Do List. Por favor, insira uma tarefa diferente.")
        } else {
            const keyValue = {
                id: generatorId(),
                ...valuesInput,
                done: false
            }

            const allDataLocalStorage = JSON.parse(localStorage.getItem("todo"))
            localStorage.setItem("todo", JSON.stringify([...allDataLocalStorage, keyValue]))
            setAllTasks([...allDataLocalStorage, keyValue])
        }

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