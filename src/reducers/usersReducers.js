export const usersReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_USERS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ALL_USERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: "",
        users: [state.user, ...action.payload],
      };
    case "GET_ALL_USERS_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
        users: [],
      };
    case "CREATE_NEW_USER_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "CREATE_NEW_USER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload,
      };
    case "CREATE_NEW_USER_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        user: {},
        users: [],
        error: action.payload,
      };

    case "EDIT_USER_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "EDIT_USER_SUCCESS":
      console.log(action.payload);
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
    case "EDIT_USER_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    case "FILTER_USER":
      return {
        ...state,
        users: state.users.filter(
          (user) => String(user.id) !== String(action.payload)
        ),
      };

    case "CLEAR_USER":
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};
