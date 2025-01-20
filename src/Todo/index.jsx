import { useState } from 'react';

export default function Todo() {
  const [todoList, setTodoList] = useState([
    { title: 'Initial TODO', status: 'pending' },
  ]);
  const [inputTodo, setInputTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const onInputChangeHandler = (e) => {
    setInputTodo(() => {
      return e.target.value;
    });
  };

  const addTodoHandler = () => {
    // Add todo input to todo list
    isEditing
      ? // Update todo list logic
        setTodoList((prevList) => {
          const updatedList = [...prevList];
          const todoObj = { title: inputTodo, status: 'pending' };
          updatedList[editIndex] = todoObj;
          return updatedList;
        })
      : // Add todo logic here
        setTodoList((prevList) => {
          if (inputTodo.length) {
            const todoObj = { title: inputTodo, status: 'pending' };
            return [...prevList, todoObj];
          } else {
            return prevList;
          }
        });
    // Reset the todo input field
    setInputTodo('');
  };

  const editTodoHandler = (idx) => {
    setInputTodo(todoList[idx].title);
    setIsEditing(true);
    // Write your logic here
    setEditIndex(idx);
  };

  const deleteTodoHandler = (idx) => {
    console.log('Index: ', idx);
    // Write your logic here

    const updatedList = todoList.filter((val, index) => index !== idx);
    setTodoList(updatedList);
    // setTodoList(todoList.filter((val, index) => index !== idx));
  };

  const handleOnEditCancelHandler = () => {
    setIsEditing(false);
    setInputTodo('');
  };

  const checkBoxChangeHandler = (e) => {
    console.log(
      'checked value: ',
      e.target.checked
      // Update the status of the todo from pending to done
    );
  };

  return (
    <div className="todo">
      <h1>TODO APP</h1>
      <div className="todo-input">
        <input
          onChange={onInputChangeHandler}
          value={inputTodo}
          type="text"
          className="todo-input-text-field"
        />
        <button
          type="button"
          className="todo-input-btn"
          onClick={addTodoHandler}
        >
          {isEditing ? 'Edit' : 'Add'} TOD0
        </button>
        {isEditing ? (
          <button
            className="cancel-edit-btn"
            onClick={handleOnEditCancelHandler}
          >
            Cancel Editing
          </button>
        ) : null}
      </div>
      <ul className="todo-list">
        {todoList.map((todo, index) => {
          return (
            <li key={index} className="todo-list-item">
              <input
                onChange={checkBoxChangeHandler}
                type="checkbox"
                id={todo}
                name={todo}
                value={todo}
              ></input>
              <p>{todo.title}</p>
              <button
                type="button"
                className="edit-btn"
                onClick={() => {
                  editTodoHandler(index);
                }}
              >
                Edit
              </button>

              <button
                type="button"
                className="delete-btn"
                onClick={() => {
                  deleteTodoHandler(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
