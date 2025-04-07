import "./Todo.css";

import * as React from 'react';
import Search from "../Search/Search";
import TaskName from "../TaskName/TaskName";
import TaskList from "../TaskList/TaskList";
import BasicPagination from "../BasicPagination/BasicPagination";

function Todo() {
    return (
        <section className="container-todo">
            <TaskName />
            <Search />
            <TaskList />
            <BasicPagination />
        </section>
    )
}

export default Todo