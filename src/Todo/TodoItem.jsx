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
  <li
    className="todo-list-item"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      textDecoration: status === "done" ? "line-through" : "none",
      backgroundColor: status === "done" ? "rgb(162, 247, 162)" : "lightgray",
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
)
}
export default TodoItem;