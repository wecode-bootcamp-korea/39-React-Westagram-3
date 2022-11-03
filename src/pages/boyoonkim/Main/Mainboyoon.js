import React from 'react';
import './Mainboyoon.scss';

function Main() {
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

          <ul className="article_reply">
            <li>
              <span className="replyId">wecode_bootcamp</span>
              <span>귀여운 웰시코기</span>
            </li>
          </ul>

          <div className="article_replyBottom">
            <input className="article_typingReply" placeholder="댓글 달기..." />
            <button className="article_replyPush" disabled>
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
        </div>
      </main>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Main;
