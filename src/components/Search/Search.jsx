import "./Search.css";

import * as React from 'react';
import ProgressCircular from "../Progress/ProgressCircular";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Search() {
    const [priority, setPriority] = React.useState('todos');

    const handleChange = (event) => {
        setPriority(event.target.value);
    };

    return (
        <section className="container-search">
            <div className="search-area">
                <p>Pesquisar:</p>
                <TextField
                    className="input-form"
                    label="Pesquisa"
                    variant="outlined"
                    size="small"
                    placeholder="Pesquisa" />
                <Button
                    variant="contained"
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
                            onChange={handleChange}
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
                        style={{ height: "40px" }}>
                        A-Z
                        <ArrowDropDownIcon style={{ width: "20px" }} />
                    </Button>
                    <Button
                        variant="contained"
                        style={{ height: "40px" }}>
                        Z-A
                        <ArrowDropDownIcon style={{ width: "20px" }} />
                    </Button>
                </div>
                <div>
                    <p>Status:</p>
                    <ProgressCircular />
                </div>
            </div>
        </section>
    )
}

export default Search