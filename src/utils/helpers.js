const API_URL = import.meta.env.VITE_API_URL;

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

export const handleApiCall = async (
  dispatch,
  loadingType,
  successType,
  errorType,
  apiCall,
  ...params
) => {
  try {
    dispatch({
      type: loadingType,
    });

    const { data } = await apiCall(API_URL, ...params);

    loadingType.startsWith("DELETE")
      ? dispatch({
          type: successType,
          payload: params[0],
        })
      : dispatch({
          type: successType,
          payload: data,
        });
  } catch (error) {
    errorHandler(error, dispatch, errorType);
  }
};
