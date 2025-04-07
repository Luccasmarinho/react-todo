import "./TaskList.css";

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

function TaskList({ taskName, taskPriority }) {
    return (
        <section className="container-tasks">
            <div className="task">
                <p>{taskName}</p>
                <div className="buttons">
                    <p className="priority">{taskPriority}</p>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button>
                            <TaskAltIcon />
                        </Button>
                        <Link to={"/to-do-list/edit/2"}>
                            <Button>
                                <ModeEditOutlineIcon />
                            </Button>
                        </Link>
                        <Button>
                            <DeleteIcon />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </section>
    )
}

export default TaskList