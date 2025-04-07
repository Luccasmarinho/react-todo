import "./TaskList.css";

import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

function TaskList({ taskName, taskPriority, allTasks, setAllTasks, indiceTask }) {
    const [colorPriority, setColorPriority] = useState("");

    useEffect(() => {
        function changeColorPriority() {
            taskPriority == "Alta"
                ? setColorPriority("red")
                : taskPriority == "Media"
                    ? setColorPriority("orange")
                    : setColorPriority("green")
        }
        changeColorPriority()

    }, [taskPriority]);

    function deleteTask(i) {

        function deleteTaskLocalStorage(filterTasks) {
            localStorage.setItem("todo", JSON.stringify(filterTasks))
        }

        allTasks.splice(i, 1)
        const tasksLocalStorage = JSON.parse(localStorage.getItem("todo"))
        const filterTasks = tasksLocalStorage.filter((_, indiceFilter) => indiceFilter != i)
        deleteTaskLocalStorage(filterTasks)
        setAllTasks([...allTasks])

    }

    return (
        <section className="container-tasks">
            <div className="task">
                <p>{taskName}</p>
                <div className="buttons">
                    <p className="priority" style={{ backgroundColor: colorPriority }}>{taskPriority}</p>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button>
                            <TaskAltIcon />
                        </Button>
                        <Link to={`/to-do-list/edit/${indiceTask + 1}`}>
                            <Button>
                                <ModeEditOutlineIcon />
                            </Button>
                        </Link>
                        <Button onClick={() => deleteTask(indiceTask)}>
                            <DeleteIcon />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </section>
    )
}

export default TaskList