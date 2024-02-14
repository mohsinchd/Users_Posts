export const errorHandler = (error, dispatch, type) => {
  const errorMessage =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  dispatch({
    type,
    payload: errorMessage,
  });
};
