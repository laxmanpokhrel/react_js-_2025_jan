import { useState } from 'react';
import Navbar from '../components/Navbar';
import DataTable from '../components/DataTable';
import Filter from '../components/Filter';
import React from 'react';
import Layout from '../components/component/Layout';
import InputTodo from '../components/InputTodo';
import Button from '../components/Button';
import InputArea from '../components/component/InputArea';

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

  const filterProps = {
    filteredTodos,
    checkBoxHandler,
    editTodoHandler,
    deleteTodoHandler,
  };

  return (
    <React.Fragment>
      <Navbar />
      <Layout>
        <InputArea> 
            <InputTodo onChangeInputHandler={onChangeInputHandler} inputTodo={stateConfig.inputTodo}/>
           <div className='btn-section'>
           <Button btn_type={'btn-primary'} action={addTodoHandler} label={stateConfig.isEditing ? 'Edit Todo' : 'Add Todo'}/>
            {stateConfig.isEditing ? (
              <Button btn_type={'btn-danger'} label={'Cancel Editing'} action={cancelEditHandler} />
            ) : null}
           </div>
          </InputArea>
          <Filter filterByStatus={filterByStatus} filter={stateConfig.filter} />
          <DataTable {...filterProps} />
      </Layout>
    </React.Fragment>
  );
};

export default Todo;
