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

    case GET_BOARD_DETAIL: {
      let copyBoard = [...state.board];
      let boardDetail = copyBoard.filter((el) => el.id === action.payload);
      return {
        ...state,
        boardDetail,
      };
    }

    default:
      return state;
  }
};
export default boardReducer;
