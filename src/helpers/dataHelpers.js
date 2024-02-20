export class DataHelpers {
  static initialUsersData = () => {
    return {
      isLoading: true,
      isError: false,
      error: "",
      users: [],
      user: {},
    };
  };

  static initialPostData = () => {
    return {
      isLoading: true,
      modalLoading: true,
      isError: false,
      error: "",
      posts: [],
      comments: [],
    };
  };

  static initialPostCrudData = () => {
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
