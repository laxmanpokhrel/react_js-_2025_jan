const Filter = ({filterByStatus, stateConfig}) =>{
    return(
        <div style={{ margin: "12px 0px" }}>
            <label htmlFor="todo">Filter Task: </label>
            <select
              name="todo"
              id = "todo"
              className="select-filter"
              onChange={filterByStatus}
              defaultValue={stateConfig.filter}
            >
              <option value="all">Select Status</option>
              <option value="pending">Pending</option>
              <option value="done">Done</option>
            </select>
          </div>
    )
}

export default Filter;