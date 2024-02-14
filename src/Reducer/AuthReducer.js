export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
        token: action.payload.token,
        message: action.payload.msg,
      };
    case "LOGOUT":
      return {
        user: null,
        isLogged: false,
        token: "",
        message: action.payload.msg,
      };
    case "RECOVERY":
      return {
        newPassword: action.payload.newPassword,
      };
    default:
      state;
  }
};
