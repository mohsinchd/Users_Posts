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
  return (
    <div className="d-flex justify-content-center align-items-center">
      <span className="me-2">
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
      <CustomButton
        className="btn btn-sm btn-primary me-1"
        onClick={previousPage}
        disabled={canPreviousPage}
        label="Prev"
      />
      <CustomButton
        className="btn btn-sm btn-primary ms-1"
        onClick={nextPage}
        disabled={canNextPage}
        label="Next"
      />
    </div>
  );
};

export default TableButtons;
