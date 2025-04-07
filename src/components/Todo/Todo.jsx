import "./Todo.css";

// import * as React from 'react';
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import BasicPagination from "../BasicPagination/BasicPagination";
import TaskAction from "../TaskAction/TaskAction";
import EmptyTask from "../EmptyTask/EmptyTask";

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
            {!allTasks || allTasks.length == 0
                ? <EmptyTask />
                : allTasks
                    .map((e, i) => (
                        <TaskList
                            key={i}
                            taskName={e.name}
                            taskPriority={e.priority}
                            allTasks={allTasks}
                            setAllTasks={setAllTasks}
                            indiceDelete={i} />)
                    )}
            <BasicPagination />
        </section>
    )
}

export default Todo