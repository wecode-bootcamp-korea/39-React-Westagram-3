import React, { useState } from 'react';

function Article({ feeddata }) {
  //게시버튼 색바꾸기
  const [blue, setBlue] = useState(false);

  function turnBlue() {
    return input.length > 0 ? setBlue(true) : setBlue(false);
  }
  //댓글 구현
  const [input, setInput] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  function saveComment(event) {
    setInput(event.target.value);
  }
  function commentArray() {
    setCommentArr([...commentArr, input]);
    setInput('');
  }
  function SingleComment({ content }) {
    return <div>yuzu_like {content}</div>;
  }

  return (
    <article className="feedarticle">
      <div className="feedname">
        <img className="preview" src={feeddata.link} width="100%" alt="story" />
        <span>{feeddata.text}</span>
        <span className="friends">대한민국</span>
        <i className="fa-solid fa-ellipsis" />
      </div>
      <img className="feedimg" src={feeddata.link} width="100%" alt="story" />
      <br />
      <div className="feedtalk">
        <i className="fa-regular fa-heart press" />
        <i className="fa-regular fa-comment" />
        <i className="fa-regular fa-paper-plane" />
        <br />
        <div>좋아요 25개</div>
        <div> {feeddata.text} 놀러가구싶다!!</div>
        <div className="date">{feeddata.id}일 전</div>
        {commentArr.map((comments, index) => (
          <SingleComment key={index} content={comments} />
        ))}
      </div>
      <div className="comment">
        <i className="smileface fa-regular fa-face-smile" />
        <input
          type="text"
          className="commentbox"
          placeholder="댓글 달기..."
          onKeyUp={turnBlue}
          onChange={saveComment}
          value={input}
        />
        <button
          className={blue ? 'aftercomment' : 'beforecomment'}
          disabled={blue ? false : true}
          onClick={commentArray}
        >
          게시
        </button>
      </div>
    </article>
  );
}

export default Article;
