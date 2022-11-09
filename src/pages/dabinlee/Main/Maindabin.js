import React, { useState } from 'react';
import './MainNavdabin.js';
import './Maindabin.scss';

export default function Maindabin() {
  const [coText, setCoText] = useState('');

  const [commentList, setCommentList] = useState([]);

  const saveCoText = event => {
    setCoText(event.target.value);
    console.log(event.target.value);
  };

  const post = e => {
    // if (e.key === 'Enter' || e.keyCode === 13) {
    // console.log('working');
    // commentList.push(coText);
    //질문1. 엔터값을 쳐서 어떻게 commentList.push 할 수 있을까요?
    // }
    console.log(e);
  };

  return (
    <>
      <form
        className="commentContainer"
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <img src="/images/img.dabinlee/smile.png" />
        <input
          className="commentInput"
          placeholder="댓글달기..."
          onChange={saveCoText}
          type="text"
          value={coText}
        />
        <button className="commentBtn" onClick={post}>
          게시
        </button>
      </form>
      <div className="commentList">
        <ul>
          {commentList.map((comment, index) => (
            <li key={index}> "@ABCD" + {comment}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
