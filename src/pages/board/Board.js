import React from 'react';
import { useSelector } from 'react-redux';
import BoardCard from '../../components/board/BoardCard';

const Board = () => {
  const state = useSelector((state) => state);

  const { board } = state.boardReducer;
  //boardReducer에서 id값을 설정해주고 그값을 셋 스테이트 한걸갖고 리다이렉트를 해서
  //그 정보가 나올수 있도록 한다.
  console.log(board);
  return (
    <div>
      <h2>Board List</h2>
      {board.map((el, idx) => (
        <BoardCard
          key={idx}
          id={el.id}
          thumbnail={el.thumbnail}
          title={el.title}
          nickname={el.nickname}
          createdAt={el.createdAt}
        />
      ))}
    </div>
  );
};

export default Board;
