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
    case UPDATE_BOARD: {
      console.log(action.payload);
      let copyBoard = [...state.board];
      copyBoard.map((el) =>
        el.id === action.payload.id ? (el.title = action.payload.title) : el
      );
      return {
        ...state,
        board: copyBoard,
      };
    }
    default:
      return state;
  }
};
export default boardReducer;
