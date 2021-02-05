import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions';

const LoginPage = () => {
  const state = useSelector((state) => state.userReducer);
  console.log(state);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleInputValue = (key) => (e) => {
    if (key === 'email') {
      setEmail(e.target.value);
      console.log('email', email);
    } else {
      setPassword(e.target.value);
      console.log('password', password);
    }
  };

  const handleSubmit = () => {
    // TODO : Login 요청 보내고  redux 이용해서 유저정보 저장해주기
    console.log(email, password);
    //state 확인
    //userInfo 는 axios.post 요청이 성공적으로 수행됬을때
    /*
      axios.post("https://localhost:4000/user/login",{
        email, password
      },{
        withCredentials : true,
        "Content-Type" : "application/json"
      })
      .then(res => dispatch(loginUser(res.data)))
      .catch(err => console.log(err))
    */
    //fakeData로 state 설정 정상적으로 작동
    const userInfo = {
      id: 1,
      nickName: 'test',
      email: 'test@test.com',
      is_signed_up: true,
    };
    dispatch(loginUser(userInfo));
  };
  return (
    <div>
      <h1> Shape of Voice</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="email"
          onChange={handleInputValue('email')}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleInputValue('password')}
          required
        />
      </form>
      <button onClick={handleSubmit}>로그인</button>
      {/* <Link to="/signup">
        <button>회원가입</button>
      </Link>
      <Link to="/templogin">
        <button>비회원 로그인</button>
      </Link>  
      풀리퀘 따로 보내기*/}
    </div>
  );
};

export default LoginPage;
