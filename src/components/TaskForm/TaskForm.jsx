
import "./TaskForm.css";

import { useState } from 'react';

import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';


function TaskForm({ inputTitle, inputIcon, valuesForm, taskName = "", taskPriority = "Alta" }) {
    const [valuePriority, setValuePriority] = useState(taskPriority);
    const [inputNameValue, setInputNameValue] = useState(taskName);

    const handleChange = (event, state) => {
        state(event.target.value);
        state(event.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault()
        valuesForm({
            name: inputNameValue,
            priority: valuePriority
        })
    }

    return (
        <section>
            <div className="title-todo">
                <h3>TODOLIST</h3>
            </div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <div className="title-input-form">
                    <p>{inputTitle}</p>
                    <TextField
                        type="search"
                        value={inputNameValue}
                        onChange={(e) => handleChange(e, setInputNameValue)}
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
                            value={valuePriority}
                            onChange={(e) => handleChange(e, setValuePriority)}
                            size="small"
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{ width: "80px", height: "40px", fontSize: "12px" }}
                        >
                            <MenuItem value="Alta">Alta</MenuItem>
                            <MenuItem value="Media">Média</MenuItem>
                            <MenuItem value="Baixa">Baixa</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="button-form">
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        {inputIcon}
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default TaskForm