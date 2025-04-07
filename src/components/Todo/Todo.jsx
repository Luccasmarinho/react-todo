import "./Todo.css";

// import * as React from 'react';
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import BasicPagination from "../BasicPagination/BasicPagination";
import TaskAction from "../TaskAction/TaskAction";

function Todo() {
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        function loadTasks() {
            setAllTasks(JSON.parse(localStorage.getItem("todo")))
        }
        loadTasks()
    }, []);

    return (
        <section className="container-todo">
            <TaskAction setAllTasks={setAllTasks} allTasks={allTasks} />
            <Search />
            {!allTasks
                ? <p>Nenhuma task...</p>
                : allTasks
                    .map((e, i) => <TaskList key={i} taskName={e.name} taskPriority={e.priority} />)}
            <BasicPagination />
        </section>
    )
}

export default Todo