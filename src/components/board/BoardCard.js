import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { getBoardDetail } from '../../actions';

const BoardCard = (props) => {
  console.log(props);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // const handleMoveDetailPage = (id) => {
  // console.log(id);
  // dispatch(getBoardDetail(id));
  // props.history.push('/boarddetail');
  // };
  return (
    <div onClick={() => handleMoveDetailPage(props.id)}>
      <h2>{props.title}</h2>
      <span>
        {props.nickname} {props.createdAt}
      </span>
    </div>
  );
};

export default withRouter(BoardCard);
