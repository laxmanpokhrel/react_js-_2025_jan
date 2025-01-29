function TodoItem(props) {
  const {
    todo,
    index,
    title,
    status,
    checkBoxChangeHandler,
    editTodoHandler,
    deleteTodoHandler,
  } = props;
  
return (
  <div  className="todo"> 
    <li
    className="todo-list-item"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      // textDecoration: status === "done" ? "line-through" : "none",
      backgroundColor:  "lightgray",
      padding: "10px",
      marginBottom: "5px",
      borderRadius: "5px",
    }}

  >
    <input
      onChange={(e) => checkBoxChangeHandler(e.target.checked, index)}
      type="checkbox"
      id={todo}
      value={todo}
      checked={status === "done"}
    />

    <p>{title}</p>

    <div className="status"
    style={{
      display: "inline-block",
      marginLeft: "6px",
      padding: "4px 12px",
      borderRadius: "16px",
      backgroundColor: `${
      status === "pending" ? "#FCD34D" : "#A7F3D0"
      }`,
    }}
  >
     {status}
  </div>

    <button
      type="button"
      className="edit-btn"
      onClick={() => editTodoHandler(index)}
    >
      <i className="fas fa-edit"></i>
    </button>
    <button
      type="button"
      className="delete-btn"
      onClick={() => deleteTodoHandler(index)}
    >
      <i className="fas fa-trash"></i>
    </button>

  

  </li>
</div>
)
}
export default TodoItem;