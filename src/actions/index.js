//Type 작성
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const GET_BOARD_DETAIL = 'GET_BOARD_DETAIL';
export const LOAD_BOARD_LIST = 'LOAD_BOARD_LIST';

export const userLogin = (userInfo) => {
  //userInfo 객체 형태로 보낼것
  console.log(userInfo);
  return {
    type: USER_LOGIN,
    payload: userInfo,
  };
};

export const userLogout = () => {
  //userInfo 객체 형태로 보낼것
  return {
    type: USER_LOGOUT,
  };
};

export const loadBoardList = (boardList) => {
  return {
    type: LOAD_BOARD_LIST,
    payload: boardList,
  };
};

export const getBoardDetail = (id) => {
  return {
    type: GET_BOARD_DETAIL,
    payload: id,
  };
};
