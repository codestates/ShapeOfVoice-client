import { USER_LOGIN, USER_LOGOUT } from '../actions';
import { initialState } from './initialState';
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        users: [action.payload],
        isLogin: true,
      };
      case USER_LOGOUT:
        return {
          ...state,
          users: [],
          isLogin: false
        };
    default:
      return state;
  }
};
export default userReducer;
