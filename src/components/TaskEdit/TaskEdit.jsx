import React from 'react';
import "./TaskEdit.css";
import TaskForm from '../TaskForm/TaskForm';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link, data, useNavigate, useParams } from 'react-router-dom';

const TaskEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dataLocalStorage = JSON.parse(localStorage.getItem("todo"))
    const { name, priority } = fieldsFilter();

    function editLocalStorage(values) {
        const index = dataLocalStorage.findIndex((e) => e.name == name)
        dataLocalStorage[index].name = values.name
        dataLocalStorage[index].priority = values.priority
        localStorage.setItem("todo", JSON.stringify(dataLocalStorage))
        navigate("/to-do-list")
    }


    function fieldsFilter() {
        const [{ name, priority }] = dataLocalStorage.filter((e) => e.id == id)
        return {
            name,
            priority,
        }
    }

    return (
        <div className="container-edit">
            <TaskForm
                inputTitle="Edite a sua tarefa"
                inputIcon={<CheckCircleIcon />}
                taskName={name}
                taskPriority={priority}
                valuesForm={editLocalStorage}
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