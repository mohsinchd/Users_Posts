import React from "react";
import CustomButton from "./customButton";

const TableButtons = ({
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage,
  pageOptions,
  pageIndex,
}) => {
  const buttons = [
    {
      className: "btn btn-sm btn-primary me-1",
      onClick: previousPage,
      disabled: canPreviousPage,
      label: "Prev",
    },
    {
      className: "btn btn-sm btn-primary ms-1",
      onClick: nextPage,
      disabled: canNextPage,
      label: "Next",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center">
      <span className="me-2">
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
      {buttons.map(({ className, onClick, disabled, label }) => (
        <CustomButton
          className={className}
          onClick={onClick}
          disabled={disabled}
          label={label}
        />
      ))}
    </div>
  );
};

export default TableButtons;
