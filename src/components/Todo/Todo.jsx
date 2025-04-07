import "./Todo.css";

import * as React from 'react';
import Search from "../Search/Search";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import BasicPagination from "../BasicPagination/BasicPagination";
import TaskAction from "../TaskAction/TaskAction";

function Todo() {
    return (
        <section className="container-todo">
            {/* <TaskForm /> */}
            <TaskAction />
            <Search />
            <TaskList />
            <BasicPagination />
        </section>
    )
}

export default Todo