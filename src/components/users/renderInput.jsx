export const renderInput = (input, formik) => {
  const inputNameArray = input.name.split(".");

  if (inputNameArray.length === 1) {
    return (
      <div key={input.id}>
        <label htmlFor={input.id}>{input.label}:</label>
        <input
          type={input.type}
          id={input.id}
          name={input.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[input.name]}
          className="form-control"
        />
        {formik.touched[input.name] && formik.errors[input.name] && (
          <div className="text-danger">{formik.errors[input.name]}</div>
        )}
      </div>
    );
  } else if (inputNameArray.length === 2) {
    return (
      <div key={input.id}>
        <label htmlFor={input.id}>{input.label}:</label>
        <input
          type={input.type}
          id={input.id}
          name={input.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[inputNameArray[0]][inputNameArray[1]]}
          className="form-control"
        />
        {formik.touched[inputNameArray[0]]?.[inputNameArray[1]] &&
          formik.errors[inputNameArray[0]]?.[inputNameArray[1]] && (
            <div className="text-danger">
              {formik.errors[inputNameArray[0]]?.[inputNameArray[1]]}
            </div>
          )}
      </div>
    );
  }

  return null;
};
