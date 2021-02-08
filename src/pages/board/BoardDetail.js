import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteBoard, updateBoard } from '../../actions';

const BoardDetail = (props) => {
  const state = useSelector((state) => state);
  const loginNickName = state.userReducer.users[0].nickname;
  const dispatch = useDispatch();
  const {
    id,
    title,
    createdAt,
    thumbnail,
    nickname,
  } = state.boardReducer.boardDetail[0];
  const [updatetitle, setTitle] = useState(title);
  const [checkBtn, setCheckBtn] = useState(false);

  const handleUpdateTitle = () => {
    // TODO: 내용 업데이트 추가해야하고 완료되면 돌려놓기
    // ? false 일때는 Title이 보여
    // 버튼을 눌르면 input이되고 그상태에서 다시 버튼을 누르면 업데이트 요청을 처리하고
    // 상태값을 새로 받아와 서새로고침

    if (checkBtn === true) {
      console.log('지금은 요청 을 보낸다.');
      //서버로 요청 보내기
      // axios.patch(
      //   'http://localhost:4000/board',
      //   {
      //     id,
      //     title: updatetitle,
      //   },
      //   { withCredentials: true, 'Content-Type': 'application/json' }
      // );
      dispatch(updateBoard({ id: id, title: updatetitle }));
    }

    setCheckBtn((prevCheckbtn) => (prevCheckbtn ? false : true));
  };

  const handleInputValue = (e) => {
    setTitle(e.target.value);
  };

  const handleDeleteBoard = () => {
    // axios.delete('http://localhost:4000/board', {
    //   data: {
    //     id,
    //   },
    //   withCredentials: true,
    //   'Content-Type': 'application/json',
    // });
    dispatch(deleteBoard(id));
    props.history.push('/board');
  };

  return (
    <div>
      {checkBtn ? (
        <input onChange={handleInputValue} value={updatetitle} />
      ) : (
        <h2 className="title">{updatetitle}</h2>
      )}

      {loginNickName === nickname ? (
        <div>
          <button onClick={handleUpdateTitle}> 수정하기</button>
          <button onClick={handleDeleteBoard}>삭제하기</button>
        </div>
      ) : (
        ''
      )}
      <p>
        {nickname} {createdAt}
      </p>
    </div>
  );
};

export default withRouter(BoardDetail);
