
import "./TaskForm.css";

import * as React from 'react';

import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';


function TaskForm({ inputTitle, inputIcon }) {
    const [priority, setPriority] = React.useState('alta');

    const handleChange = (event) => {
        setPriority(event.target.value);
    };
    return (
        <section>
            <div className="title-todo">
                <h3>TODOLIST</h3>
            </div>
            <form className="todo-form">
                <div className="title-input-form">
                    <p>{inputTitle}</p>
                    <TextField
                        type="search"
                        className="input-form"
                        label="Nome da tarefa"
                        variant="outlined"
                        size="small"
                        placeholder="Tarefa" />
                </div>
                <div className="select-form">
                    <FormControl>
                        <p>Prioridade</p>
                        <Select
                            value={priority}
                            onChange={handleChange}
                            size="small"
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{ width: "80px", height: "40px", fontSize: "12px" }}
                        >
                            <MenuItem value="alta">Alta</MenuItem>
                            <MenuItem value="media">Média</MenuItem>
                            <MenuItem value="baixa">Baixa</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="button-form">
                    <Button
                        variant="contained"
                    >
                        {inputIcon}
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default TaskForm