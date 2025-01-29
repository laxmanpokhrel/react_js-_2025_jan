import { useEffect, useState } from 'react';
import RoundedContainer from '../components/Containers/RoundedContainer';
import ExpensiveComponent from '../components/ExpensiveComponent';
import TodoItem from '../Todo/TodoItem';

export default function Todo() {
  const [todoList, setTodoList] = useState([
    {
      title: 'Initial Todo',
      status: 'pending',
    },
  ]);
  // const [inputTodo, setInputTodo] = useState('');
  // const [isEditing, setIsEditing] = useState(false);
  // const [editIndex, setEditIndex] = useState(null);
  // const [filterStatus, setFilterStatus] = useState('all');

  const [todoState, setTodoState] = useState({
    inputTodo: '',
    isEditing: false,
    editIndex: null,
    filterStatus: 'all',
  });

  const onInputChangeHandler = (e) => {
    // setInputTodo(e.target.value);
    setTodoState((prevState) => ({ ...prevState, inputTodo: e.target.value }));
  };

  const addTodoHandler = () => {
    todoState.isEditing
      ? setTodoList((prevList) => {
          const updatedList = [...prevList];
          const todoObj = { title: todoState.inputTodo, status: 'pending' };
          updatedList[todoState.editIndex] = todoObj;
          setTodoState((prevState) => ({ ...prevState, isEditing: false }));
          return updatedList;
        })
      : setTodoList((prevList) => {
          if (todoState.inputTodo.length) {
            const todoObj = { title: todoState.inputTodo, status: 'pending' };
            return [...prevList, todoObj];
          } else {
            return prevList;
          }
        });
    // setInputTodo('');
    setTodoState((prevState) => ({ ...prevState, inputTodo: '' }));
  };

  const checkBoxChangeHandler = (value, index) => {
    setTodoList((prevList) => {
      const obj = prevList[index];
      const newObject = { ...obj, status: value ? 'done' : 'pending' };
      const updatedList = [...prevList];
      updatedList[index] = newObject;
      return updatedList;
    });
  };

  const editTodoHandler = (idx) => {
    // setInputTodo(todoList[idx].title);
    // setIsEditing(true);
    // setEditIndex(idx);

    setTodoState((prevState) => ({
      ...prevState,
      inputTodo: todoList[idx].title,
      isEditing: true,
      editIndex: idx,
    }));
  };

  const deleteTodoHandler = (idx) => {
    const updatedList = todoList.filter((_, index) => index !== idx);
    setTodoList(updatedList);
  };

  const handleOnEditCancelHandler = () => {
    // setIsEditing(false);
    // setInputTodo('');
    setTodoState((prevState) => ({
      ...prevState,
      inputTodo: '',
      isEditing: false,
    }));
  };

  const filterChangeHandler = (e) => {
    // setFilterStatus(e.target.value);
    setTodoState((prevState) => ({
      ...prevState,
      filterStatus: e.target.value,
    }));
  };

  const filteredTodos =
    todoState.filterStatus === 'all'
      ? todoList
      : todoList.filter((todo) => todo.status === todoState.filterStatus);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="todo">
      <header className="todo-header">TODO APP</header>

      <div className="container">
        <RoundedContainer>
          <div className="card-header">
            <i className="fas fa-clipboard-list"></i> Add Todo
          </div>

          <div className="todo-input">
            <input
              onChange={onInputChangeHandler}
              value={todoState.inputTodo}
              className="todo-input-text-field"
              placeholder="Enter your task here"
              type="text"
            />
            <button
              type="button"
              className="todo-input-btn"
              onClick={addTodoHandler}
            >
              {todoState.isEditing ? 'Save' : 'Add'}
            </button>

            {todoState.isEditing ? (
              <button
                className="cancel-edit-btn"
                onClick={handleOnEditCancelHandler}
              >
                Cancel
              </button>
            ) : null}
          </div>
        </RoundedContainer>

        <RoundedContainer>
          <div
            className="card-header"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>
              <i className="fas fa-tasks"></i> Todo List
            </span>
            <select
              value={todoState.filterStatus}
              onChange={filterChangeHandler}
              className="filter-dropdown"
              style={{
                padding: '5px 10px',
                borderRadius: '10px',
                border: '1px solid gray',
                backgroundColor: '#f0f0f0',
                fontSize: '14px',
                cursor: 'pointer',
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
        </RoundedContainer>
      </div>
    </div>
  );
}
