import React from 'react';
import './MainNavdabin.js';
import './Maindabin.scss';

function Maindabin() {
  return (
    <form
      className="commentContainer"
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <img src="/images/img.dabinlee/smile.png" />
      <input className="commentInput" placeholder="댓글달기..." />
      <button className="commenBtn">게시</button>
    </form>
  );
}

export default Maindabin;
