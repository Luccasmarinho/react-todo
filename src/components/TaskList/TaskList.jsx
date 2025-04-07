import "./TaskList.css";

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
function TaskList() {
    return (
        <section className="container-tasks">
            <div className="task">
                <p>Fazer o dever de casa</p>
                <div className="buttons">
                    <p className="priority">Alta</p>
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