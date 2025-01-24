import { useState } from 'react';
import Navbar from '../components/Navbar';
import DataTable from '../components/DataTable';
import Filter from '../components/Filter';

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { title: 'Make Todo', status: 'pending' },
  ]);
  const [stateConfig, setStateConfig] = useState({
    inputTodo: '',
    isEditing: false,
    editIndex: null,
    filter: 'all',
  });

  const onChangeInputHandler = (e) => {
    setStateConfig((prevState) => ({
      ...prevState,
      inputTodo: e.target.value,
    }));
  };

  const addTodoHandler = () => {
    setTodoList((previousList) => {
      if (stateConfig.isEditing && stateConfig.editIndex !== null) {
        const updatedList = [...previousList];
        updatedList[stateConfig.editIndex] = {
          title: stateConfig.inputTodo,
          status: 'pending',
        };
        return updatedList;
      } else {
        if (stateConfig.inputTodo.length) {
          return [
            ...previousList,
            { title: stateConfig.inputTodo, status: 'pending' },
          ];
        }
        return previousList;
      }
    });

    setStateConfig((prevState) => ({
      ...prevState,
      inputTodo: '',
      isEditing: false,
      editIndex: null,
    }));
  };

  const deleteTodoHandler = (idx) => {
    setTodoList((prevList) => prevList.filter((val, index) => idx !== index));
  };

  const cancelEditHandler = () => {
    setStateConfig((prevState) => ({
      ...prevState,
      inputTodo: '',
      isEditing: false,
    }));
  };

  const editTodoHandler = (idx) => {
    setStateConfig((prevState) => ({
      ...prevState,
      inputTodo: todoList[idx].title,
      isEditing: true,
      editIndex: idx,
    }));
  };

  const checkBoxHandler = (value, idx) => {
    if (value) {
      setTodoList((previousList) => {
        const updateObject = previousList[idx];
        const newObject = { ...updateObject, status: 'done' };
        const updatedList = [...previousList];
        updatedList[idx] = newObject;
        return updatedList;
      });
    } else {
      setTodoList((previousList) => {
        const updateObject = previousList[idx];
        const newObject = { ...updateObject, status: 'pending' };
        const updatedList = [...previousList];
        updatedList[idx] = newObject;
        return updatedList;
      });
    }
  };

  const filterByStatus = (e) => {
    setStateConfig((prevState) => ({ ...prevState, filter: e.target.value }));
  };

  const filteredTodos =
    stateConfig.filter === 'all'
      ? todoList
      : todoList.filter((todo) => todo.status === stateConfig.filter);

  return (
    <div className="todo">
      <Navbar />
      <div className="container">
        <div className="container-item">
          <div className="input-area">
            <input
              className="input-box"
              onChange={onChangeInputHandler}
              value={stateConfig.inputTodo}
              type="text"
              placeholder="Enter your todo..."
            />
            <button className="btn" type="button" onClick={addTodoHandler}>
              {stateConfig.isEditing ? 'Edit Todo' : 'Add Todo'}
            </button>
            {stateConfig.isEditing ? (
              <button
                className="btn btn-danger"
                type="button"
                onClick={cancelEditHandler}
              >
                Cancel Editing
              </button>
            ) : null}
          </div>
          <Filter filterByStatus={filterByStatus} filter={stateConfig.filter} />
          <DataTable
            filteredTodos={filteredTodos}
            checkBoxHandler={checkBoxHandler}
            editTodoHandler={editTodoHandler}
            deleteTodoHandler={deleteTodoHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
