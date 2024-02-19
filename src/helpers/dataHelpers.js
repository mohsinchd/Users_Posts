export class DataHelpers {
  static initialUsersState = () => {
    return {
      isLoading: true,
      isError: false,
      error: "",
      users: [],
      user: {},
    };
  };

  static initialPostsState = () => {
    return {
      isLoading: true,
      modalLoading: true,
      isError: false,
      error: "",
      posts: [],
      comments: [],
    };
  };

  static initialPostCrud = () => {
    return {
      isLoading: true,
      isError: false,
      error: "",
      post: {},
      message: "",
      posts: [],
    };
  };
}
