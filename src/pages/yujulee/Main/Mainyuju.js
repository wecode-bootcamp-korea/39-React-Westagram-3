import React, { useState } from 'react';
import './Mainyuju.scss';

function Story({ src, figcaption }) {
  return (
    <div className="story">
      <img className="storyimg" src={src} width="100%" alt="story" />
      <figcaption>{figcaption}</figcaption>
    </div>
  );
}

function Recommend({ src, id, friends }) {
  return (
    <div className="feedname">
      <img className="preview" src={src} alt="story" />
      <span>{id}</span>
      <span className="friends">{friends}</span>
      <span className="follow">팔로우</span>
    </div>
  );
}

function Mainyuju() {
  const [blue, setBlue] = useState(false); //게시버튼 색바꾸기

  const [input, setInput] = useState('');
  const [commentArr, setCommentArr] = useState([]);

  function saveComment(event) {
    setInput(event.target.value);
  }
  function commentArray() {
    setCommentArr([...commentArr, input]);
  }

  function SingleComment({ content }) {
    return <div>yuzu_like {content}</div>;
  }

  function turnBlue() {
    return input.length > 0 ? setBlue(true) : setBlue(false);
  }

  return (
    <>
      <nav className="navbar">
        <div className="icons">
          <i className="fa-brands fa-instagram" />
          <br />
          <i className="fa-sharp fa-solid fa-house" />
          <br />
          <i className="fa-solid fa-magnifying-glass" />
          <br />
          <i className="fa-regular fa-paper-plane" />
          <br />
          <i className="fa-regular fa-heart" />
          <br />
          <i className="fa-regular fa-square-plus" />
        </div>
      </nav>
      <div className="wrapper">
        <main className="mainbox">
          <section className="storybox">
            <Story src="/images/img.yujulee/photo7.jpg" figcaption="_stagram" />
            <Story src="/images/img.yujulee/photo6.jpg" figcaption="absdefg" />
            <Story src="/images/img.yujulee/photo2.jpeg" figcaption="howru" />
            <Story src="/images/img.yujulee/photo3.jpeg" figcaption="wewe_we" />
            <Story
              src="/images/img.yujulee/photo8.jpeg"
              figcaption="soojinee"
            />
          </section>

          <article className="feedarticle">
            <div className="feedname">
              <img
                className="preview"
                src="/images/img.yujulee/photo6.jpg"
                width="100%"
                alt="story"
              />
              <span>yuzu_like</span>
              <span className="friends">대한민국</span>
              <i className="fa-solid fa-ellipsis" />
            </div>
            <img
              className="feedimg"
              src="/images/img.yujulee/photo8.jpeg"
              width="100%"
              alt="story"
            />
            <br />
            <div className="feedtalk">
              <i className="fa-regular fa-heart press" />
              <i className="fa-regular fa-comment" />
              <i className="fa-regular fa-paper-plane" />
              <br />
              <div>좋아요 25개</div>
              <div> yuzu_like 놀러가구싶다!!</div>
              <div className="date">1일 전</div>
              <ul className="writes">
                <li className="write" />
              </ul>
              {commentArr.map(comments => (
                <SingleComment content={comments} />
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
        </main>
        <aside className="sidebar">
          <div className="feedname">
            <img
              className="profile"
              src="/images/img.yujulee/photo6.jpg"
              alt="story"
            />
            <span>yuzu_like</span>
            <span className="friends">이유주</span>
            <span className="follow">전환</span>
          </div>
          <span className="all">회원님을 위한 추천</span>
          <span className="viewall">모두 보기</span>
          <Recommend
            src="/images/img.yujulee/photo3.jpeg"
            id="who_who"
            friends="oh_vet94님, hongjye__님 외 11명이 팔로우"
          />
          <Recommend
            src="/images/img.yujulee/photo6.jpg"
            id="wecode_bootcamp"
            friends="wylee0930님, oh_vet94님 외 13명이 팔로"
          />
          <Recommend
            src="/images/img.yujulee/photo7.jpg"
            id="sunnny_day"
            friends="wylee0930님, oh_vet94님 외 13명이 팔로"
          />
          <Recommend
            src="/images/img.yujulee/photo8.jpeg"
            id="forever_for"
            friends="s0.jeon님과 yeah915님이 팔로우합니다"
          />
          <Recommend
            src="/images/img.yujulee/photo2.jpeg"
            id="i_likeeee"
            friends="회원님을 위한 추천"
          />
        </aside>
      </div>
    </>
  );
}
export default Mainyuju;
