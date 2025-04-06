import "./Todo.css";

import * as React from 'react';
import Search from "../Search/Search";
import TaskName from "../TaskName/TaskName";
import TaskList from "../TaskList/TaskList";

function Todo() {
    return (
        <section className="container-todo">
            <TaskName />
            <Search />
            <TaskList />
        </section>
    )
}

export default Todo