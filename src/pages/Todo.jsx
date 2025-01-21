import { useState } from "react";


const Todo = () => {
    const [inputTodo, setInputTodo] = useState('');
    const [todoList, setTodoList] = useState(['Initial Todo']);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const onChangeInputHandler = (e) =>{
        setInputTodo(() => {
            return e.target.value;
        });
    };

    const addTodoHandler = () => {
        isEditing?
        setTodoList((previousList) => {
            const updatedList = [...previousList];
            updatedList[editIndex] = inputTodo;
            return updatedList;
    })
        :
        setTodoList((previousList) => {
            if(inputTodo.length>0) return [...previousList, inputTodo];
            else return previousList
        });        
        setInputTodo('');
    };

    const deleteTodoHandler = (idx) => {
        const updateTodoList = todoList.filter((val, index) => idx !== index)
        setTodoList(updateTodoList)
    };

    const cancelEditHandler = () => {
        setIsEditing(false);
        setInputTodo('');
    }

    const editTodoHandler = (idx) =>{
        setInputTodo(todoList[idx])
        setIsEditing(true)
        setEditIndex(idx)
    }
    return(
        <div className="todo">
            <h2 className="todo-title">Todo List</h2>
            <div className="container">
                <div className="container-item">
                <input className="input-box"
                    onChange={onChangeInputHandler}
                    value={inputTodo}
                    type="text"
                    placeholder="Enter your todo..."
                />
                <button 
                    className="btn" 
                    type="button"
                    onClick={addTodoHandler}>
                        {isEditing? 'Edit Todo':'Add Todo'}                
                </button>
                {isEditing?(
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={cancelEditHandler}
                    >
                    Cancel Editing
                </button>) : null    
            }
                <table className="table">
                    <thead>
                        <tr>
                        <td>S.N.</td>
                        <td>Things Todo</td>
                        <td>Action</td>
                        </tr>
                    </thead>
                   <tbody>
                    {todoList.map( (todoItem, index) => { 
                    return(
                        <tr key={todoItem}>
                        <td>{index}</td>
                        <td>{todoItem}</td>
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
                                onClick={() => deleteTodoHandler(index)}>
                                Delete
                            </button>
                         
                            
                            </td>
                        </tr>
                    )
                } )}
            </tbody>
                </table>

            </div>
            </div>
        </div>
    );
}

export default Todo;