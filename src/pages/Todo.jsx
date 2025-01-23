import { useState } from "react";
import Navbar from "../components/Navbar";

const Todo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todoList, setTodoList] = useState([
    { title: "Make Todo", status: "pending" },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState('all');

  const onChangeInputHandler = (e) => {
    setInputTodo(() => {
      return e.target.value;
    });
  };

  const addTodoHandler = () => {
    isEditing
      ? setTodoList((previousList) => {
          const updatedList = [...previousList];
          const updateTodo = { title: inputTodo, status: "pending" };
          updatedList[editIndex] = updateTodo;
          setIsEditing(false);
          setEditIndex(null);
          return updatedList;
        })
      : setTodoList((previousList) => {
          if (inputTodo.length) {
            const newTodo = { title: inputTodo, status: "pending" };
            return [...previousList, newTodo];
          } else {
            return previousList;
          }
        });

    setInputTodo("");
  };

  const deleteTodoHandler = (idx) => {
    const updateTodoList = todoList.filter((val, index) => idx !== index);
    setTodoList(updateTodoList);
  };

  const cancelEditHandler = () => {
    setIsEditing(false);
    setInputTodo("");
  };

  const editTodoHandler = (idx) => {
    setInputTodo(todoList[idx].title);
    setIsEditing(true);
    setEditIndex(idx);
  };

  const checkBoxHandler = (value, idx) => {
    if (value) {
      setTodoList((previousList) => {
        const updateObject = previousList[idx];
        const newObject = { ...updateObject, status: "done" };
        const updatedList = [...previousList];
        updatedList[idx] = newObject;
        return updatedList;
      });
    } else {
      setTodoList((previousList) => {
        const updateObject = previousList[idx];
        const newObject = { ...updateObject, status: "pending" };
        const updatedList = [...previousList];
        updatedList[idx] = newObject;
        return updatedList;
      });
    }
  };

  const filterByStatus = (e) => {
    setFilter(e.target.value)
  };

  const filteredTodos = filter === 'all'
                              ? todoList: 
                              todoList.filter((todo) => todo.status === filter);

  return (
    <div className="todo">
      <Navbar />
      <div className="container">
        <div className="container-item">
          <div className="input-area">
            <input
              className="input-box"
              onChange={onChangeInputHandler}
              value={inputTodo}
              type="text"
              placeholder="Enter your todo..."
            />
            <button className="btn" type="button" onClick={addTodoHandler}>
              {isEditing ? "Edit Todo" : "Add Todo"}
            </button>
            {isEditing ? (
              <button
                className="btn btn-danger"
                type="button"
                onClick={cancelEditHandler}
              >
                Cancel Editing
              </button>
            ) : null}
          </div>
          <div style={{ margin: "12px 0px" }}>
            <label>Filter Task: </label>
            <select
              name="todo"
              id = "todo"
              className="select-filter"
              onChange={filterByStatus}
              defaultValue={filter}
            >
              <option value="all">Select Status</option>
              <option value="pending">Pending</option>
              <option value="done">Done</option>
            </select>
          </div>
          <table className="table">
            <thead>
              <tr>
                <td>S.N.</td>
                <td style={{ minWidth: "105px" }}>Things todo</td>
                <td style={{ minWidth: "75px" }}>Status</td>
                <td>Mark as done</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {filteredTodos.map((todoItem, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{todoItem.title}</td>
                    <td>
                      <span
                        style={{
                          padding: "4px 12px",
                          borderRadius: "16px",
                          backgroundColor: `${
                            todoItem.status === "pending" ? "#FCD34D" : "#A7F3D0"
                          }`,
                        }}
                      >
                        {todoItem.status}
                      </span>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={todoItem.status === "pending" ? false : true}
                        onChange={(e) =>
                          checkBoxHandler(e.target.checked, index)
                        }
                        className="checkbox-btn"
                      />
                    </td>
                    <td>
                      <button
                        className="btn"
                        type="button"
                        onClick={() => editTodoHandler(index)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => deleteTodoHandler(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Todo;
