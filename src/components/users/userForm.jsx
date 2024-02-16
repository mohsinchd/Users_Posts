import React from "react";
import { useFormik } from "formik";
import { userValidationSchema } from "../../utils/validationSchema";
import { inputTypesUser } from "../../utils/inputTypes";
import { renderInput } from "./renderInput";

const UserForm = ({
  initialValues,
  buttonTitle,
  checkEdit,
  handleEdit,
  handleCreate,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema: userValidationSchema,
    onSubmit: submitHandler,
  });

  function submitHandler(values) {
    checkEdit ? handleEdit(values) : handleCreate(values);
  }

  return (
    <>
      <form>
        {inputTypesUser.map((input) => renderInput(input, formik))}
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className="btn btn-primary mt-2"
        >
          {buttonTitle}
        </button>
      </form>
    </>
  );
};

export default UserForm;
