import React, { useState } from 'react';
import './MainNavdabin.js';
import './Maindabin.scss';

export default function Maindabin() {
  const [coText, setCoText] = useState('');
  const [commentList, setCommentList] = useState([]);
  const active = coText.length >= 1;

  const saveCoText = event => {
    setCoText(event.target.value);
  };

  const handleClickBtn = () => {
    const pushedComment = [...commentList, coText];
    setCommentList(pushedComment);
    saveCoText('');
    //리팩토링이 필요함 1
  };
  //리팩토링이 필요함 2
  const handleKeyDown = event => {
    if (event.code === 'Enter' && coText.length > 0) {
      handleClickBtn();
    }
  };

  return (
    <>
      <div className="commentContainer">
        <img src="/images/img.dabinlee/smile.png" />
        <input
          className="commentInput"
          placeholder="댓글달기..."
          onChange={saveCoText}
          type="text"
          value={coText}
          onKeyPress={handleKeyDown}
          //사용자가 키를 눌렀을 때
        />
        <button
          className="commentBtn"
          onClick={handleClickBtn}
          disabled={!active}
        >
          게시
        </button>
      </div>
      <div className="commentList">
        <ul>
          {commentList.map((comment, index) => (
            <li key={index}> {comment}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
