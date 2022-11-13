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
    <section className="feedContainer">
      <div className="feedIndivisual">
        <div className="feedUserInformation">
          <img className="feedUserPic" src={feedinfo.profileimg} />
          <h4 className="feedUserName">{feedinfo.username}</h4>
        </div>
        <img
          className="feedImg"
          src={feedinfo.feedimg}
          alt="feed-img"
          width="30rem"
        />
        <section className="feedContainerIcons">
          <img src="/images/img.dabinlee/heart.PNG" alt="heart" />
          <img src="/images/img.dabinlee/comment.PNG" alt="comment" />
          <img src="/images/img.dabinlee/message.PNG" alt="message" />
          <img
            className="bookmarkIcon"
            src="/images/img.dabinlee/bookmark.PNG"
            alt="bookmark"
          />
        </section>
        <h3 className="feedCtx">
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
        <div className="commentContainer">
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
