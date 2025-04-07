import React from 'react'
import TaskForm from '../TaskForm/TaskForm'

import AddIcon from '@mui/icons-material/Add';

const TaskAction = () => {
    return (
        <div>
            <TaskForm
                inputIcon={<AddIcon />}
                inputTitle="Adicione sua tarefa"
            />
        </div>
    )
}

export default TaskAction