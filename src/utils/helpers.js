import { LOADING, SUCCESS, ERROR } from "../constants/actionTypesUsers";

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
  requestType,
  apiCall,
  ...params
) => {
  try {
    dispatch({
      type: requestType + LOADING,
    });

    const { data } = await apiCall(API_URL, ...params);

    requestType.startsWith("DELETE")
      ? dispatch({
          type: requestType + SUCCESS,
          payload: params[0],
        })
      : dispatch({
          type: requestType + SUCCESS,
          payload: data,
        });
  } catch (error) {
    errorHandler(error, dispatch, requestType + ERROR);
  }
};
