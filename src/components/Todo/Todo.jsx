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
    // const [allTasks, setAllTasks] = useState([]);
    const [allTasks, setAllTasks] = useState(() => {
        const stored = localStorage.getItem("todo");
        return stored ? JSON.parse(stored) : [];
    });
    const [valueSearch, setValueSearch] = useState("");
    const [isDisable, setIsDisabled] = useState(true);
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;


    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(allTasks));
        function paginationDisabled() {
            allTasks.length == 0 ? setIsDisabled(true) : setIsDisabled(false)
        }
        paginationDisabled()
    }, [allTasks]);

    function filterSearch(value) {
        setValueSearch(value)
    }

    // const startIndex = (page - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    const tasksDone = allTasks.filter((task) => task.done).length;
    const totalTasks = allTasks.length;

    return (
        <section className="container-todo">
            <TaskAction setAllTasks={setAllTasks} allTasks={allTasks} />
            <Search filterSearch={filterSearch} tasksDone={tasksDone} totalTasks={totalTasks} />
            {!allTasks || allTasks.length == 0
                ? <EmptyTask />
                : allTasks
                    // .slice(startIndex, endIndex)
                    .filter((e) =>
                        e.name.toLowerCase().includes(valueSearch.toLocaleLowerCase()))
                    .map((e, i) => (
                        <TaskList
                            key={e.id}
                            taskName={e.name}
                            taskPriority={e.priority}
                            taskDone={e.done}
                            allTasks={allTasks}
                            setAllTasks={setAllTasks}
                            indiceTask={i} />)
                    )}
            <BasicPagination countPagination={1} isDisabled={isDisable} />
        </section>
    )
}

export default Todo