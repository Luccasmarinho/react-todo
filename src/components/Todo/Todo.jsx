import "./Todo.css";

function Todo() {
    return (
        <div className="container-todo">
            <div className="title-area">
                <h2>To do List</h2>
            </div>
            <div className="task-name-area">
                <form className="form">
                    <div className="form-task-name">
                        <h3>Nome da tarefa</h3>
                        <input type="text" />
                    </div>
                    <div className="form-select-buttonAdd">
                        <select name="" id="">
                            <option value="">baixa</option>
                        </select>
                        <button>+</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Todo