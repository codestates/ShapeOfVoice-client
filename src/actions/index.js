export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = (userInfo) => {
  //userInfo 객체 형태로 보낼것
  console.log(userInfo);
  return {
    type: LOGIN_USER,
    payload: userInfo,
  };
};
