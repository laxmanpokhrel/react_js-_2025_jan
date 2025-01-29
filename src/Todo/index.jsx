import { useState, useEffect } from "react";
import { RoundedContainers } from "../components/Containers/RoundedContainers";
import TodoItem from "./TodoItem";
import WeatherInfo from "./WeatherInfo";
export default function Todo() {
  // const [todoList, setTodoList] = useState([
  //   {
  //     title: "Initial Todo",
  //     status: "pending",
  //   },
  // ]);
  
  const [inputTodo, setInputTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [todoList, setTodoList] = useState(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });

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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  
  return (
    <div className="todo">
      <header className="todo-header">TODO APP</header>
      <div className="container">
         
        <RoundedContainers>
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
        </RoundedContainers>

        <RoundedContainers>
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
              <TodoItem
                key={index}
                todo={todo}
                status={todo.status}
                title={todo.title}
                index={index}
                checkBoxChangeHandler={checkBoxChangeHandler}
                editTodoHandler={editTodoHandler}
                deleteTodoHandler={deleteTodoHandler}
              />
            ))}
          </ul>
        </RoundedContainers>
      </div>
    </div>
  );
}
