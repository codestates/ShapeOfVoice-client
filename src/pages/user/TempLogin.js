import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions';

const TempLogin = (props) => {
  const state = useSelector((state) => state.userReducer);
  console.log(state);
  const dispatch = useDispatch();
  const [nickName, setNickName] = useState('');

  const handleInputValue = (e) => {
    setNickName(e.target.value);
  };

  const handleTempLogin = () => {
    //server open
    /*
      axios.post("http://localhost:4000/user/login",
      {nickName},
      {
        withCredentials : true,
        "Content-Type" : "application/json"
      })
      .then(res => dispatch(loginUser(res.data)))
      .catch(err => console.log(err))
    */
    //fakeData로 비회원 로그인 테스트
    const userInfo = {
      id: 2,
      nickName: 'non-members',
      is_signed_up: false,
    };
    dispatch(loginUser(userInfo));
    props.history.push('/');
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="nickName"
          onChange={handleInputValue}
          required
        />
      </form>
      <button onClick={handleTempLogin}>로그인</button>
    </div>
  );
};

export default withRouter(TempLogin);
