import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './components/Nav';
import AddBoard from './pages/board/AddBoard';
import Board from './pages/board/Board';
import BoardDetail from './pages/board/BoardDetail';
import Main from './pages/Main';
import LoginPage from './pages/user/LoginPage';
import MyPage from './pages/user/MyPage';
import SignUp from './pages/user/SignUp';
import TempLogin from './pages/user/TempLogin';

const App = () => {
  const [isLogin, setLogin] = useState(false);

  return isLogin ? (
    <div>
      <Nav />
      <Switch>
        {/* 로그인이끝나면 메인으로 요청이 들어올 것이다. */}
        <Route exact path="/" render={() => <Main />} />
        <Route path="/main" render={() => <Main />} />
        <Route path="/mypage" render={() => <MyPage />} />
      </Switch>
      <Switch>
        <Route path="/addboard" render={() => <AddBoard />} />
        <Route path="/board" render={() => <Board />} />
        <Route path="/boarddetail" render={() => <BoardDetail />} />
      </Switch>
    </div>
  ) : (
    <div>
      <Switch>
        <Route exact path="/" render={() => <LoginPage />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/templogin" render={() => <TempLogin />} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
