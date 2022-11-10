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
      <section className="friends_story__container">
        <div className="friends_story__individual">
          <div className="friends_story__user1_pic"></div>
          <h4 className="friends_story__user1_name" />
          0713.jpg
        </div>
        <div className="friends_story__individual">
          <div className="friends_story__user1_pic"></div>
          <h4 className="friends_story__user1_name" />
          0713.jpg
        </div>
        <div className="friends_story__individual">
          <div className="friends_story__user1_pic"></div>
          <h4 className="friends_story__user1_name" />
          0713.jpg
        </div>
      </section>
      <section className="feed_container">
        <div className="feed_indivisual">
          <div className="feed_user__information">
            <div className="feed_user__pic" />
            <h4 className="feed_user__name">0713.jpg</h4>
          </div>
          <img
            className="feed_img"
            src="/images/img.dabinlee/feedimg.JPG"
            alt="feed-img"
          />
        </div>
        <section className="feed_container__icons">
          <img src="/images/img.dabinlee/heart.PNG" alt="heart" />
          <img src="/images/img.dabinlee/comment.PNG" alt="comment" />
          <img src="/images/img.dabinlee/message.PNG" alt="message" />
          <img
            className="bookmark_icon"
            src="/images/img.dabinlee/bookmark.PNG"
            alt="bookmark"
          />
        </section>
        <section className="feed_container__ctx">
          <h3 className="feed_container__feed_likes">
            <b>0713.jpg</b>님외 90명이 좋아합니다
          </h3>
          <h3 className="feed__ctx">
            {' '}
            <b>0713.jpg</b> 봉로포즈... 🌹 💍
          </h3>
        </section>
        <div className="commentList">
          <ul>
            {commentList.map((comment, index) => (
              <li key={index}>
                {' '}
                <span>0713.jpg </span>
                {comment}
              </li>
            ))}
          </ul>
        </div>
        <div className="comment_container">
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
      </section>
    </>
  );
}
