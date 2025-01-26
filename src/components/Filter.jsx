const Filter = ({ filterByStatus, filter }) => {
  return (
    <div className="filter-wrapper">
      <label htmlFor="todo">Filter Task: </label>
      <select
        name="todo"
        id="todo"
        className="select-filter"
        onChange={filterByStatus}
        defaultValue={filter}
      >
        <option value="all">Select Status</option>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default Filter;
