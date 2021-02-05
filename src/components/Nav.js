import React from 'react';
import { Link } from 'react-router-dom';
const nav = () => {
  return (
    <>
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
    </>
  );
};

export default nav;
