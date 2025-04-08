import React from 'react';
import "./TaskEdit.css";
import TaskForm from '../TaskForm/TaskForm';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link, useParams } from 'react-router-dom';

const TaskEdit = () => {
    const { indice } = useParams();
    const { name, priority } = filterLocalStorage();
    
    function filterLocalStorage() {
        const dataLocalStorage = JSON.parse(localStorage.getItem("todo"))
        const [{ name, priority }] = dataLocalStorage.filter((_, i) => i == indice - 1)

        return {
            name,
            priority
        }
    }

    return (
        <div className="container-edit">
            <TaskForm
                inputTitle="Edite a sua tarefa"
                inputIcon={<CheckCircleIcon />}
                taskName={name}
                taskPriority={priority}
            />
            <Link to={"/to-do-list"}>
                <Button variant="contained">
                    Voltar
                </Button>
            </Link>
        </div>
    )
}

export default TaskEdit