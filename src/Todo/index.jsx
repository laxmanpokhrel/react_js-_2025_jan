import { useState } from "react";
export default function Todo() {
  const [todoList, setTodoList] = useState([
    {
      title: "Initial Todo",
      status: "pending",
    },
  ]);
  const [inputTodo, setInputTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");

  const onInputChangeHandler = (e) => {
    setInputTodo(e.target.value);
  };

  const addTodoHandler = () => {
    isEditing
      ? setTodoList((prevList) => {
          const updatedList = [...prevList];
          const todoObj = { title: inputTodo, status: "pending" };
          updatedList[editIndex] = todoObj;
          return updatedList;
        }, setIsEditing(false))
      : setTodoList((prevList) => {
          if (inputTodo.length) {
            const todoObj = { title: inputTodo, status: "pending" };
            return [...prevList, todoObj];
          } else {
            return prevList;
          }
        });
    setInputTodo("");
  };

  const checkBoxChangeHandler = (value, index) => {
    setTodoList((prevList) => {
      const obj = prevList[index];
      const newObject = { ...obj, status: value ? "done" : "pending" };
      const updatedList = [...prevList];
      updatedList[index] = newObject;
      return updatedList;
    });
  };

  const editTodoHandler = (idx) => {
    setInputTodo(todoList[idx].title);
    setIsEditing(true);
    setEditIndex(idx);
  };

  const deleteTodoHandler = (idx) => {
    const updatedList = todoList.filter((_, index) => index !== idx);
    setTodoList(updatedList);
  };

  const handleOnEditCancelHandler = () => {
    setIsEditing(false);
    setInputTodo("");
  };

  const filterChangeHandler = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredTodos =
    filterStatus === "all"
      ? todoList
      : todoList.filter((todo) => todo.status === filterStatus);

  return (
    <div className="todo">
      <header className="todo-header">TODO APP</header>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <i className="fas fa-clipboard-list"></i> Add Todo
          </div>

          <div className="todo-input">
            <input
              onChange={onInputChangeHandler}
              value={inputTodo}
              className="todo-input-text-field"
              placeholder="Enter your task here"
              type="text"
            />
            <button
              type="button"
              className="todo-input-btn"
              onClick={addTodoHandler}
            >
              {isEditing ? "Save" : "Add"}
            </button>

            {isEditing ? (
              <button
                className="cancel-edit-btn"
                onClick={handleOnEditCancelHandler}
              >
                Cancel
              </button>
            ) : null}
          </div>
        </div>

        <div className="card">
          <div
            className="card-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>
              <i className="fas fa-tasks"></i> Todo List
            </span>
            <select
              value={filterStatus}
              onChange={filterChangeHandler}
              className="filter-dropdown"
              style={{
                padding: "5px 10px",
                borderRadius: "10px",
                border: "1px solid gray",
                backgroundColor: "#f0f0f0",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="done">Done</option>
            </select>
          </div>

          <ul className="todo-list">
            {filteredTodos.map((todo, index) => (
              <li
                key={index}
                className="todo-list-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration:
                    todo.status === "done" ? "line-through" : "none",
                  backgroundColor:
                    todo.status === "done" ? "rgb(162, 247, 162)" : "lightgray",
                  padding: "10px",
                  marginBottom: "5px",
                  borderRadius: "5px",
                  transition: "transform 0.2s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-3px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <input
                  onChange={(e) =>
                    checkBoxChangeHandler(e.target.checked, index)
                  }
                  type="checkbox"
                  id={todo}
                  value={todo}
                  checked={todo.status === "done"}
                />

                <p>{todo.title}</p>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editTodoHandler(index)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteTodoHandler(index)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
