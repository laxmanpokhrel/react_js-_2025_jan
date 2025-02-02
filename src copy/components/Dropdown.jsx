const Dropdown = ({ label, value, onChange, options, disabled }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        value={value || ""}
        onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)}
        disabled={disabled}
        className="select-input"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown

