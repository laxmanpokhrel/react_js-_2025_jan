import { useState } from "react";


const Todo = () => {
    const [inputTodo, setInputTodo] = useState('');
    const [todoList, setTodoList] = useState(['Initial Todo']);

 
    const onChangeInputHandler = (e) =>{
        setInputTodo(() => {
            return e.target.value;
        });
    };

    const addTodoHandler = () => {
        setTodoList((previousList) => {
            if(inputTodo.length>0) return [...previousList, inputTodo];
            else return previousList
        });        
        setInputTodo('');
    };

    return(
        <div className="todo">
            <h2 className="todo-title">Todo List</h2>
            <div className="container">
                <div className="container-item">
                <input className="input-box"
                    onChange={onChangeInputHandler}
                    value={inputTodo}
                    type="text"
                />
                <button className="btn" 
                    onClick={addTodoHandler}>
                        Add Todo
                </button>
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
                        <td>Edit | Delete</td>
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