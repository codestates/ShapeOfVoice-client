import React from 'react';
import { Link } from 'react-router-dom';

import { userLogout } from '../actions';
const nav = (props) => {
  const handleLogout = () => {
    // TODO : Logout 요청 보내고 redux 이용해서 로그인 상태 => false
    /*
      axios.post("https://localhost:4000/user/logout", null, {
        withCredentials : true,
        "Content-Type" : "application/json"
      })
      .then(res => dispatch(userLogout()))
      .catch(err => console.log(err))
    */
    dispatch(userLogout());
    props.history.push('/');
  };

  return (
    <div>
      <Link to="/main">
        <button>로고</button>
      </Link>
      <Link to="/board">
        <button>보드</button>
      </Link>
      <Link to="/mypage">
        <button>마이페이지</button>
      </Link>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default nav;
