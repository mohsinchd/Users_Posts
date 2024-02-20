import CustomInput from "../posts/customInput";

export const renderInput = (input, formik) => {
  const inputNameArray = input.name.split(".");

  if (inputNameArray.length === 1) {
    return (
      <CustomInput
        label={input.label}
        id={input.id}
        type={input.type}
        name={input.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[input.name]}
        touched={formik.touched[input.name]}
        error={formik.errors[input.name]}
      />
    );
  } else if (inputNameArray.length === 2) {
    return (
      <CustomInput
        label={input.label}
        id={input.id}
        type={input.type}
        name={input.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[inputNameArray[0]][inputNameArray[1]]}
        touched={formik.touched[inputNameArray[0]]?.[inputNameArray[1]]}
        error={formik.errors[inputNameArray[0]]?.[inputNameArray[1]]}
      />
    );
  }

  return null;
};
