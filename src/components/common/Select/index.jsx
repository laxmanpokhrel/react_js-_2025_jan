import { useEffect, useState } from 'react';

const tempOptions = [{ id: '1', value: 'test', label: 'Test' }];

export default function Select({
  options = tempOptions,
  onChange,
  placeholder,
  name,
  id,
  value,
  disabled,
}) {
  const [changedValue, setChangedValue] = useState(null);

  useEffect(() => {
    setChangedValue(value);
  }, [value]);

  useEffect(() => {
    if (onChange) onChange(changedValue);
    // onChange?.(value);
  }, [changedValue]);

  return (
    <select
      disabled={disabled}
      name={name}
      id={id}
      defaultValue={value}
      onChange={(e) => setChangedValue(e.target.value)}
    >
      <option>{placeholder}</option>
      {options?.map(({ id, value, label }) => {
        return (
          <option key={id} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
}
