import React from 'react';
import "./TaskEdit.css";
import TaskForm from '../TaskForm/TaskForm';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const TaskEdit = () => {
    return (
        <div className="container-edit">
            <TaskForm
                inputTitle="Edite a sua tarefa"
                inputIcon={<CheckCircleIcon />}
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