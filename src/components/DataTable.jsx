const DataTable = ({
  filteredTodos,
  checkBoxHandler,
  editTodoHandler,
  deleteTodoHandler,
}) => {
  return (
    <>
      <div className="data-container">
        <div className="data-header">
          <div>SN.</div>
          <div>Task</div>
          <div>Status</div>
          <div>Status Check</div>
          <div>Action</div>
        </div>
        {filteredTodos.map((todoItem, index) => {
            return (
        <div className="data-row"> 
            <div>
              <span>SN.:</span> {index+1}
            </div>
            <div>
              <span>Task:</span> {todoItem.title}
            </div>
            <div>
              <span>Status:</span> 
              <div
                style={{
                  display: "inline-block",
                  marginLeft: "6px",
                  padding: "4px 12px",
                  borderRadius: "16px",
                  backgroundColor: `${
                    todoItem.status === "pending" ? "#FCD34D" : "#A7F3D0"
                  }`,
                }}
              >
                 {todoItem.status}
              </div>
             
            </div>
            <div>
              <span>Status Check:  </span> 
              <input
                    type="checkbox"
                    checked={todoItem.status === "pending" ? false : true}
                    onChange={(e) => checkBoxHandler(e.target.checked, index)}
                    className="checkbox-btn"
                  />
            </div>
            <div>
            <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => editTodoHandler(index)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => deleteTodoHandler(index)}
                  >
                    Delete
                  </button>
            </div>
          </div>
            )}
          )}
        </div>
    </>
  );
};

export default DataTable;
