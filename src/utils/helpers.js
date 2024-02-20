import { LOADING, SUCCESS, ERROR } from "../constants/commonActionTypes";
import { NetworkRequest } from "./networkRequests";

const API_URL = import.meta.env.VITE_API_URL;

export const errorHandler = (error, dispatch, type) => {
  const errorMessage = error.response.data.message ?? error.message;
  dispatch({
    type,
    payload: errorMessage,
  });
};

export const requestHandler = async (dispatch, requestType, ...params) => {
  try {
    const apiCall = NetworkRequest[requestType];

    dispatch({
      type: requestType + LOADING,
    });

    const { data } = await apiCall(API_URL, ...params);

    dispatch({
      type: requestType + SUCCESS,
      payload: requestType.startsWith("delete") ? params[0] : data,
    });
  } catch (error) {
    errorHandler(error, dispatch, requestType + ERROR);
  }
};
