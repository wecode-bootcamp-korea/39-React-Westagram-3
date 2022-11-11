import React from 'react';
import './Mainyuju.scss';
import Feed from './Feed';

//props로 중복코드제거
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
          <Feed />
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
          <div className="asidearr">
            소개 도움말 홍보 센터 API 채용 정보 개인정보처리방침 <br />
            약관 위치 인기 계정 해시태그 언어
          </div>
        </aside>
      </div>
    </>
  );
}
export default Mainyuju;
