import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { userLogout } from '../actions';
const nav = (props) => {
  const dispatch = useDispatch();
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

  const handleLoadData = () => {
    axios
      .get('http://localhost:4000/board/list', {
        withCredentials: true,
        'Content-Type': 'application/json',
      })
      .then((res) => {
        let boardList = [];
        let listItem = {};
        console.log(res.data.result);
        let nickname;
        res.data.result.map((el) => {
          listItem['nickname'] = el.nickname;
          nickname = el.nickname;
          el.voices.map((el) => {
            listItem['thumbnail'] = el.thumbnail;
            el.boards.map((el) => {
              listItem['id'] = el.id;
              listItem['title'] = el.title;
              listItem['createdAt'] = el.createdAt.slice(0, 10);
              boardList.push(listItem);
              listItem = {};
              listItem['nickname'] = nickname;
            });
          });
        });
        dispatch(loadBoardList(boardList));
      });
  };
  return (
    <div>
      <Link to="/main">
        <button>로고</button>
      </Link>
      <Link to="/board">
        <button onClick={handleLoadData}>보드</button>
      </Link>
      <Link to="/mypage">
        <button>마이페이지</button>
      </Link>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default nav;
