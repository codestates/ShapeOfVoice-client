import React from 'react';
import { Link } from 'react-router-dom';
const nav = () => {
  return (
    <>
      <div>
        <Link to="/main"> 로고</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/templogin">비회원</Link>
        <Link to="/main">메인</Link>
        <Link to="/mypage">마이페이지</Link>
        <Link to="/addboard">게시글추가</Link>
        <Link to="/board">게시글리스트</Link>
        <Link to="/boarddetail">상세페이지</Link>
      </div>
    </>
  );
};

export default nav;
