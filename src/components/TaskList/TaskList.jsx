import "./TaskList.css";

import { use, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PendingIcon from '@mui/icons-material/Pending';
import { Link } from "react-router-dom";

function TaskList({ taskName, taskPriority, allTasks, setAllTasks, indiceTask, taskDone }) {
    const [colorPriority, setColorPriority] = useState("");
    const [taskChecked, setTaskChecked] = useState(taskDone);
    const [backgroundColorTask, setBackgroundColorTask] = useState("");
    const [text, setText] = useState("none");
    const [icon, setIcon] = useState(<PendingIcon className="icon-pending" />);

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

    useEffect(() => {
        function changeTaskComplete() {
            if (taskChecked) {
                setBackgroundColorTask("#54a3c450")
                setText("line-through")
                setIcon(<DoneAllIcon style={{ color: "blue" }} />)
            } else {
                setBackgroundColorTask("white")
                setText("none")
                setIcon(<PendingIcon className="icon-pending" />)
            }
        }
        changeTaskComplete()
    }, [taskChecked])

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

    function handleChangeChecked() {

        function changeDoneLocalStorage() {
            const local = JSON.parse(localStorage.getItem("todo"))
            local[indiceTask].done = !local[indiceTask].done
            localStorage.setItem("todo", JSON.stringify(local))
            return local
        }
        const updatedTasks = changeDoneLocalStorage()
        setAllTasks(updatedTasks)

        setTaskChecked((prev) => !prev)
    }

    return (
        <section className="container-tasks">
            <div className="task" style={{ backgroundColor: backgroundColorTask }}>
                <div className="task-checked">
                    {icon}
                    <p style={{ textDecoration: text }}>{taskName}</p>
                </div>
                <div className="buttons">
                    <p className="priority" style={{ backgroundColor: colorPriority }}>{taskPriority}</p>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button onClick={handleChangeChecked}>
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