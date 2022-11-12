import React, { useState } from 'react';
import Nav from './MainNavdabin';
import './Maindabin.scss';
import ASIDE_LIST from './data';
import FeedList from './FeedList';

export default function Maindabin() {
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
    <>
      <Nav />
      <div className="mainpage">
        <section className="feed-component">
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
            <div className="friends_story__individual">
              <div className="friends_story__user1_pic"></div>
              <h4 className="friends_story__user1_name" />
              0713.jpg
            </div>
          </section>
          <FeedList />
        </section>
        <aside className="right_container">
          <div className="right_container_my_bio">
            <img src="/images/img.dabinlee/feedimg.jpg" alt="mybiopic" />
            <ul>
              <li className="right_container_Id">0713.jpg</li>
              <li className="right_container_name">Dalbong</li>
            </ul>
            <button className="right_container_switch">전환</button>
          </div>
          <div className="right_container_text">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <section className="right_container_recommendation">
            <div className="right_container_reco_1">
              <img
                src="/images/img.dabinlee/feedimg.jpg"
                alt="user recommend"
              />
              <ul className="right_container_reco_1_name">
                <li>0713.jpg</li>
                <li>Null 님이 팔로우 합니다</li>
              </ul>
              <button className="right_container_reco_1_btn">팔로우</button>
            </div>
            <div className="right_container_reco_1">
              <img
                src="/images/img.dabinlee/feedimg.jpg"
                alt="user recommend"
              />
              <ul className="right_container_reco_1_name">
                <li>0713.jpg</li>
                <li>Null 님이 팔로우 합니다</li>
              </ul>
              <button className="right_container_reco_1_btn">팔로우</button>
            </div>
            <div className="right_container_reco_1">
              <img
                src="/images/img.dabinlee/feedimg.jpg"
                alt="user recommend"
              />
              <ul className="right_container_reco_1_name">
                <li>0713.jpg</li>
                <li>Null 님이 팔로우 합니다</li>
              </ul>
              <button className="right_container_reco_1_btn">팔로우</button>
            </div>
          </section>
          <ul className="aside_list">
            {ASIDE_LIST.map(el => {
              return <li key={el.id}>{el.text}•</li>;
            })}
          </ul>
        </aside>
      </div>
    </>
  );
}
