import React from 'react';
import { useState } from 'react';
import Comment from './Comment';
import './Feed.scss';

const Feed = ({ feedinfo }) => {
  const [coText, setCoText] = useState('');
  const [commentList, setCommentList] = useState([]);
  const active = coText.length >= 5;

  const saveCoText = event => {
    setCoText(event.target.value);
  };

  const handleClickBtn = () => {
    const pushedComment = [...commentList, coText];
    setCommentList(pushedComment);
    setCoText('');
  };

  const handleKeyDown = event => {
    if (event.code === 'Enter' && coText.length > 0) {
      handleClickBtn();
    }
  };

  return (
    <section className="feed_container">
      <div className="feed_indivisual">
        <div className="feed_user__information">
          <img className="feed_user__pic" src={feedinfo.profileimg} />
          <h4 className="feed_user__name">{feedinfo.username}</h4>
        </div>
        <img
          className="feed_img"
          src={feedinfo.feedimg}
          alt="feed-img"
          width="30rem"
        />
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
        <h3 className="feed__ctx">
          {feedinfo.username}
          {feedinfo.text}
        </h3>
        <section></section>
        <div className="commentList">
          <ul>
            {commentList.map((comment, index) => (
              <Comment key={index} contents={comment} />
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
          />
          <button
            className="commentBtn"
            onClick={handleClickBtn}
            disabled={!active}
          >
            게시
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feed;
