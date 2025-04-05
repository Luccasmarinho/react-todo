import "./Todo.css";

import * as React from 'react';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function ContainedButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
                Link
            </Button>
        </Stack>
    );
}


function Todo() {
    const [priority, setPriority] = React.useState('alta');

    const handleChange = (event) => {
        setPriority(event.target.value);
    };

    return (
        <section className="container-todo">
            <div className="title-todo">
                <h3>TODOLIST</h3>
            </div>
            <form className="todo-form">
                <div className="title-input-form">
                    <p>Digite sua tarefa</p>
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
                        style={{ height: "40px", boxShadow: "0 0 0 0" }}>
                        +
                    </Button>
                </div>
            </form>

        </section>
    )
}

export default Todo