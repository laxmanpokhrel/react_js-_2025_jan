import { useState } from "react";
import Navbar from "../components/Navbar";


const Todo = () => {
    const [inputTodo, setInputTodo] = useState('');
    const [todoList, setTodoList] = useState([{title: 'Initial Todo', status: 'pending'}]);
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
            const updateTodo = {title: inputTodo, status: 'pending'};
            updatedList[editIndex] = updateTodo;
            setIsEditing(false);
            setEditIndex(null);
            return updatedList;
    })
        :
        setTodoList((previousList) => {
            if(inputTodo.length){
                const newTodo = {title: inputTodo, status: 'pending'}
                return [...previousList, newTodo];  
            } 
            else{
                return previousList;
            }
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
        setInputTodo(todoList[idx].title)
        setIsEditing(true)
        setEditIndex(idx)
    }

    const checkBoxHandler = (idx) =>{
        setTodoList((previousList)=>{
            const updateList = [...previousList]
            const updateTodo = {title: updateList[idx].title, 
                                status: (updateList[idx].status==='pending')?'done':'pending'}
            updateList[idx] = updateTodo
            console.log(JSON.stringify(updateTodo))
            return updateList
        })
        
    }
    return(
        <div className="todo">
            <Navbar />
            <div className="container">
                <div className="container-item">
               <div className="input-area">
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
               </div>
                <table className="table">
                    <thead>
                        <tr>
                        <td>S.N.</td>
                        <td>Things Todo</td>
                        <td style={{minWidth:'70px'}}>Status</td>
                        <td>Mark Done</td>
                        <td>Action</td>
                        </tr>
                    </thead>
                   <tbody>
                    {todoList.map( (todoItem, index) => { 
                    return(
                        <tr key={todoItem}>
                        <td>{index}</td>
                        <td>{todoItem.title}</td>
                        <td><span style={{
                                        padding:"4px 10px", 
                                        borderRadius:"12px",
                                        backgroundColor: `${todoItem.status==='pending'?'orange':'lightgreen'}`}}>

                             {todoItem.status}
                            </span>
                        </td>
                        <td>
                            <input type="checkbox" 
                                checked={todoItem.status==='pending'? false: true}
                                onChange={() => checkBoxHandler(index)}
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