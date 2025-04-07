import "./TaskList.css";

import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

function TaskList({ taskName, taskPriority, allTasks, setAllTasks, indiceDelete }) {
    const [changeColorPriority, setChangeColorPriority] = useState("");

    function deleteTask(indiceTask) {

        function deleteTaskLocalStorage(filterTasks) {
            localStorage.setItem("todo", JSON.stringify(filterTasks))
        }

        allTasks.splice(indiceTask, 1)
        const tasksLocalStorage = JSON.parse(localStorage.getItem("todo"))
        const filterTasks = tasksLocalStorage.filter((_, indiceFilter) => indiceFilter != indiceTask)
        deleteTaskLocalStorage(filterTasks)
        setAllTasks([...allTasks])

    }

    // function color() {
    //     if (taskPriority == "Alta") {
    //         setChangeColorPriority("red") 
    //     } else if (taskPriority = "Média") {
    //         setChangeColorPriority("orange") 
    //     } else {
    //         setChangeColorPriority("green") 
    //     }
    // }

    return (
        <section className="container-tasks">
            <div className="task">
                <p>{taskName}</p>
                <div className="buttons">
                    <p className="priority" style={{ backgroundColor: changeColorPriority }}>{taskPriority}</p>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button>
                            <TaskAltIcon />
                        </Button>
                        <Link to={"/to-do-list/edit/2"}>
                            <Button>
                                <ModeEditOutlineIcon />
                            </Button>
                        </Link>
                        <Button onClick={() => deleteTask(indiceDelete)}>
                            <DeleteIcon />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </section>
    )
}

export default TaskList