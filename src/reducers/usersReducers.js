import {
  GET_ALL_USER,
  CREATE_NEW_USER,
  EDIT_USER,
  DELETE_USER,
} from "../constants/actionTypesUsers";
import { LOADING, SUCCESS, ERROR } from "../constants/commonActionTypes";

export const usersReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_USER + LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_USER + SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        users: [state.user, ...action.payload],
      };
    case GET_ALL_USER + ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        users: [],
      };
    case CREATE_NEW_USER + LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_NEW_USER + SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload,
      };
    case CREATE_NEW_USER + ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        user: {},
        users: [],
        error: action.payload,
      };

    case EDIT_USER + LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_USER + SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        users: state.users.map((user) => {
          if (String(user.id) === String(action.payload.id)) {
            return action.payload;
          } else {
            return user;
          }
        }),
      };
    case EDIT_USER + ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    case DELETE_USER + LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_USER + SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.filter(
          (user) => String(user.id) !== String(action.payload)
        ),
      };
    case DELETE_USER + ERROR:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
