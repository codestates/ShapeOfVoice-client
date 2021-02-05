import { LOGIN_USER } from '../actions';
import { initialState } from './initialState';
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        users: [action.payload],
      };
    default:
      return state;
  }
};
export default userReducer;
