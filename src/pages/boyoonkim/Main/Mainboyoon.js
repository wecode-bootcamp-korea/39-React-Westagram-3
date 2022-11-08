import React, { useState } from 'react';
import './Mainboyoon.scss';
import Footer from '../../../components/Footer/Footer';

function Main() {
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
    // props를 이용해서 하나의 컴포넌트를 만든다!
    return (
      <li key={key}>
        <span className="replyId">booooni.k</span>
        <span>{comment}</span>
      </li>
    );
  };

  const showComment = commentList.map((comment, index) =>
    pushComment(comment, index)
  );

  const enterComment = e => {
    if (e.keyCode === 13) {
      addComment();
    }
  };

  return (
    <div className="mainPage">
      <nav className="navBar">
        <div className="navBar_logo">
          <i className="fa-brands fa-instagram" />
          <div>|</div>
          <div className="navBar_logoInstagram">Westagram</div>
        </div>

        <div className="navBar_searchBar">
          <i className="fa-solid fa-magnifying-glass" />
          <input className="navBar_search" type="text" placeholder="검색" />
        </div>

        <div className="navBar_icons">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt=""
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt=""
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt=""
          />
        </div>
      </nav>

      <main className="main_feeds">
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

          <img
            className="article_img"
            src="/images/img.boyoonkim/dogimg.jpg"
            alt=""
          />

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
            <button className="article_replyPush" onClick={addComment}>
              게시
            </button>
          </div>
        </article>

        <div className="main_right">
          <div className="right_info">
            <img
              className="right_smallImage"
              src="/images/img.boyoonkim/boimg.jpg"
              alt=""
            />
            <div className="right_IdName">
              <div className="id">booooni.k</div>
              <div className="name">보윤</div>
            </div>
          </div>

          <div className="right_storyFriends">
            <div className="right_nav">
              <div>스토리</div>
              <div>모두보기</div>
            </div>

            <div className="right_story">
              <div className="storyAround">
                <img
                  className="storyImg"
                  src="/images/img.boyoonkim/dogimg2.jpg"
                  alt=""
                />
              </div>
              <div className="story_IdTime">
                <div>sayho_oooo</div>
                <div>20분 전</div>
              </div>
            </div>

            <div className="right_story">
              <div className="storyAround">
                <img
                  className="storyImg"
                  src="/images/img.boyoonkim/dogimg2.jpg"
                  alt=""
                />
              </div>
              <div className="story_IdTime">
                <div>sayho_oooo</div>
                <div>20분 전</div>
              </div>
            </div>

            <div className="right_story">
              <div className="storyAround">
                <img
                  className="storyImg"
                  src="/images/img.boyoonkim/dogimg2.jpg"
                  alt=""
                />
              </div>
              <div className="story_IdTime">
                <div>sayho_oooo</div>
                <div>20분 전</div>
              </div>
            </div>

            <div className="right_story">
              <div className="storyAround">
                <img
                  className="storyImg"
                  src="/images/img.boyoonkim/dogimg2.jpg"
                  alt=""
                />
              </div>
              <div className="story_IdTime">
                <div>sayho_oooo</div>
                <div>20분 전</div>
              </div>
            </div>

            <div className="right_story">
              <div className="storyAround">
                <img
                  className="storyImg"
                  src="/images/img.boyoonkim/dogimg2.jpg"
                  alt=""
                />
              </div>
              <div className="story_IdTime">
                <div>sayho_oooo</div>
                <div>20분 전</div>
              </div>
            </div>
          </div>

          <div className="right_follow">
            <div className="right_nav">
              <div>회원님을 위한 추천</div>
              <div>모두 보기</div>
            </div>

            <div className="right_recommend">
              <img
                className="recommendImg"
                src="/images/img.boyoonkim/dogimg2.jpg"
                alt=""
              />
              <div className="recommend_IdName">
                <div>hi990103</div>
                <div>hyewon님이 팔로우합니다</div>
              </div>
              <div className="recommend_follow">팔로우</div>
            </div>

            <div className="right_recommend">
              <img
                className="recommendImg"
                src="/images/img.boyoonkim/dogimg2.jpg"
                alt=""
              />
              <div className="recommend_IdName">
                <div>hi990103</div>
                <div>hyewon님이 팔로우합니다</div>
              </div>
              <div className="recommend_follow">팔로우</div>
            </div>

            <div className="right_recommend">
              <img
                className="recommendImg"
                src="/images/img.boyoonkim/dogimg2.jpg"
                alt=""
              />
              <div className="recommend_IdName">
                <div>hi990103</div>
                <div>hyewon님이 팔로우합니다</div>
              </div>
              <div className="recommend_follow">팔로우</div>
            </div>

            <div className="right_recommend">
              <img
                className="recommendImg"
                src="/images/img.boyoonkim/dogimg2.jpg"
                alt=""
              />
              <div className="recommend_IdName">
                <div>hi990103</div>
                <div>hyewon님이 팔로우합니다</div>
              </div>
              <div className="recommend_follow">팔로우</div>
            </div>

            <div className="right_recommend">
              <img
                className="recommendImg"
                src="/images/img.boyoonkim/dogimg2.jpg"
                alt=""
              />
              <div className="recommend_IdName">
                <div>hi990103</div>
                <div>hyewon님이 팔로우합니다</div>
              </div>
              <div className="recommend_follow">팔로우</div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Main;
