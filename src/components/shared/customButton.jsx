import React from "react";

const CustomButton = ({
  className = "",
  onClick = () => {},
  disabled = false,
  label = "",
}) => {
  return (
    <button
      className={className}
      onClick={() => onClick()}
      disabled={!disabled}
    >
      {label}
    </button>
  );
};

export default CustomButton;
