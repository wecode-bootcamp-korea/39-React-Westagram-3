import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import Feed from './Feed';
import './Mainboyoon.scss';

function Main() {
  const [userInfoList, setUserInfoList] = useState([]);

  useEffect(() => {
    // 데이터를 계속 가져올 필요 없으니까 그리고 데이터 받아오는데 오류가 생기면 유저는 흰화면만 보게 됨!!
    fetch('/data/userInfoList.json')
      .then(response => response.json())
      .then(result => setUserInfoList(result));
  }, []);

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
        <div className="feeds_article">
          {userInfoList.map((feed, index) => (
            <Feed key={index} feed={feed} />
          ))}
        </div>

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
