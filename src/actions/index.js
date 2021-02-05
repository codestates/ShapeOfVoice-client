//Type 작성
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

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
    type: USER_LOGOUT
  };
};

