import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "../../utils/validationSchema";
import { inputTypes } from "../../utils/inputTypes";
import CustomInput from "./CustomInput";

const PostForm = ({
  initialData,
  buttonTitle,
  handleEdit,
  handleCreate,
  isEditForm,
}) => {
  const { handleChange, handleSubmit, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: initialData,
      validationSchema,
      onSubmit: submitHandler,
    });

  function submitHandler(values) {
    isEditForm ? handleEdit(values) : handleCreate(values);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputTypes.map(({ id, label, name, type }) => (
          <CustomInput
            key={id}
            type={type}
            label={label}
            id={id}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors[name]}
            touched={touched[name]}
            value={values[name]}
          />
        ))}

        <button className="btn btn-primary mt-3">{buttonTitle}</button>
      </form>
    </div>
  );
};

export default PostForm;
