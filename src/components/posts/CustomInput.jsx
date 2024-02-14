import React from "react";

const CustomInput = ({
  label,
  id,
  type,
  placeHolder,
  onChange,
  onBlur,
  name,
  error,
  touched,
  value,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeHolder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && error ? <div className="text-danger">{error}</div> : null}
    </div>
  );
};

export default CustomInput;
