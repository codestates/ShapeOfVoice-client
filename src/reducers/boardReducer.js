import { LOAD_BOARD_LIST } from '../actions';
import { boardState } from './initialState';

const boardReducer = (state = boardState, action) => {
  switch (action.type) {
    case LOAD_BOARD_LIST: {
      return {
        ...state,
        board: [...action.payload],
      };
    }
    default:
      return state;
  }
};
export default boardReducer;
