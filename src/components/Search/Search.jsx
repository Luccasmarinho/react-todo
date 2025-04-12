import "./Search.css";

import { useEffect, useState } from 'react';
import ProgressCircular from "../Progress/ProgressCircular";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Search({ filterSearch, tasksDone, totalTasks, changeOrder, filterPriority }) {
    const [priority, setPriority] = useState("todos");
    const [inputSearch, setInputSearch] = useState("");

    function handleChange(e, set, filterProps) {
        set(e.target.value)
        filterProps(e.target.value)
    }

    // const handleChange = (event) => {
    //     setPriority(event.target.value);
    //     filterPriority(event.target.value);
    // };

    // function handleChangeInput(event) {
    //     setInputSearch(event.target.value)
    //     filterSearch(event.target.value)
    // }

    function deleteTextInput() {
        setInputSearch("")
        filterSearch("")
    }

    function handleChangeOrder(sort) {
        changeOrder(sort)
    }

    return (
        <section className="container-search">
            <div className="search-area">
                <p>Pesquisar:</p>
                <TextField
                    value={inputSearch}
                    className="input-form"
                    // onChange={handleChangeInput}
                    onChange={(e) => handleChange(e, setInputSearch, filterSearch)}
                    label="Pesquisa"
                    variant="outlined"
                    size="small"
                    placeholder="Pesquisa" />
                <Button
                    variant="contained"
                    onClick={deleteTextInput}
                    style={{ height: "40px" }}>
                    <BackspaceIcon />
                </Button>
            </div>
            <div className="filter-area">
                <div>
                    <p>Filtrar:</p>
                    <FormControl>
                        <Select
                            value={priority}
                            // onChange={handleChange}
                            onChange={(e) => handleChange(e, setPriority, filterPriority)}
                            size="small"
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{ width: "150px", height: "40px", fontSize: "12px" }}
                        >
                            <MenuItem value="todos">Todos</MenuItem>
                            <MenuItem value="feitos">Feitos</MenuItem>
                            <MenuItem value="nao-feitos">Não feitos</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="button-area">
                    <p>Ordenar:</p>
                    <Button
                        variant="contained"
                        onClick={() => handleChangeOrder("ASC")}
                        style={{ height: "40px" }}>
                        A-Z
                        &darr;
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => handleChangeOrder("DESC")}
                        style={{ height: "40px" }}>
                        Z-A
                        &darr;
                    </Button>
                </div>
                <div className="progress-area">
                    <p>Progresso:</p>
                    <ProgressCircular tasksDone={tasksDone} totalTasks={totalTasks} />
                </div>
            </div>
        </section>
    )
}

export default Search