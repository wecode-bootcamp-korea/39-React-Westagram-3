import React, { useState } from 'react';

const Feed = ({ feed }) => {
  // 구조 분해 할당 -> 데이터 양이 많아지면 데이터 찾기가 어려워짐 원래는 props.feed.img 이런식으로 써야함!
  // const { feed } = props; 원래 이 식을 짧게 작성한 것
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleComment = event => {
    setComment(event.target.value); // 댓글 함수에 input 값을 넣어줌
  };

  // 추가된 댓글로 배열 만들기
  const addComment = () => {
    let arr = [...commentList]; // 원본 데이터를 바꾸지않기 위해 항상 복사본을 만들어서 쓴다!
    arr.push(comment); // 새로운 배열에 댓글을 push
    setCommentList(arr); // 해당 배열을 set 배열 함수에 담아줌
    setComment(''); // 댓글 창을 비워줌
  };

  // UI에 나타내기
  const pushComment = (comment, key) => {
    // 댓글 삭제 버튼
    const delComment = () => {
      let newArr = [...commentList];
      newArr.splice(key, 1);
      setCommentList(newArr);
    };
    // props를 이용해서 하나의 컴포넌트를 만든다!
    return (
      <li key={key}>
        <span className="replyId">booooni.k</span>
        <span>{comment}</span>
        <i className="replyDelete fa-solid fa-trash-can" onClick={delComment} />
      </li>
    );
  };

  const showComment = commentList.map((comment, index) =>
    pushComment(comment, index)
  );

  // 게시 버튼 비활성화
  const btnValid = comment.length > 0;
  const btnDisabled = btnValid ? false : true;

  // 댓글에 1자 이상이고 enter 칠때 댓글 게시
  const enterComment = e => {
    if (e.keyCode === 13 && btnValid) {
      addComment();
    }
  };

  return (
    <article className="main_article">
      <div className="article_navbar">
        <img
          className="smallImage"
          src="/images/img.boyoonkim/smile img.jpg"
          alt=""
        />
        <div className="feedHeader">
          <div className="id">wecode_bootcamp</div>
          <div className="name">WeCode - 위코드</div>
        </div>
        <i className="fa-solid fa-ellipsis" />
      </div>

      <img className="article_img" src={feed.img} alt="" />

      <div className="article_icons">
        <div>
          <i className="fa-solid fa-heart" />
          <i className="fa-regular fa-comment" />
          <i className="fa-solid fa-arrow-up-from-bracket" />
        </div>

        <div>
          <i className="fa-regular fa-bookmark" />
        </div>
      </div>

      <div className="article_content">
        <img
          className="content_Image"
          src="/images/img.boyoonkim/boimg.jpg"
          alt=""
        />
        <span className="content_likes">
          <span className="content_likesName">booooni.k</span>님 외 777명이
          좋아합니다.
        </span>
      </div>

      <ul className="article_reply">{showComment}</ul>

      <div className="article_replyBottom">
        <input
          className="article_typingReply"
          placeholder="댓글 달기..."
          value={comment}
          onChange={handleComment}
          onKeyUp={enterComment}
        />
        <button
          className="article_replyPush"
          onClick={comment}
          disabled={btnDisabled}
        >
          게시
        </button>
      </div>
    </article>
  );
};

export default Feed;
