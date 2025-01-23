const DataTable = ({filteredTodos, checkBoxHandler, editTodoHandler, deleteTodoHandler}) =>{
    return(
        <table className="table">
        <thead>
          <tr>
            <td>S.N.</td>
            <td style={{ minWidth: "105px" }}>Things todo</td>
            <td style={{ minWidth: "75px" }}>Status</td>
            <td>Mark as done</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todoItem, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{todoItem.title}</td>
                <td>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: "16px",
                      backgroundColor: `${
                        todoItem.status === "pending" ? "#FCD34D" : "#A7F3D0"
                      }`,
                    }}
                  >
                    {todoItem.status}
                  </span>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={todoItem.status === "pending" ? false : true}
                    onChange={(e) =>
                      checkBoxHandler(e.target.checked, index)
                    }
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
                    onClick={() => deleteTodoHandler(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
}

export default DataTable;