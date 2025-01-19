import { useState } from 'react';

export default function Todo() {
  const [todoList, setTodoList] = useState(['Initial TODO']);
  const [inputTodo, setInputTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const onInputChangeHandler = (e) => {
    setInputTodo(() => {
      return e.target.value;
    });
  };

  const addTodoHandler = () => {
    // Add todo input to todo list
    setTodoList((prevList) => {
      return [...prevList, inputTodo];
    });
    // Reset the todo input field
    setInputTodo('');
  };

  const editTodoHandler = (idx) => {
    setInputTodo(todoList[idx]);
    setIsEditing(true);
    // Write your logic here
  };

  const deleteTodoHandler = (idx) => {
    console.log('Index: ', idx);
    // Write your logic here
  };

  const handleOnEditCancelHandler = () => {
    setIsEditing(false);
    setInputTodo('');
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
            <li key={todo} className="todo-list-item">
              <p>{todo}</p>
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
