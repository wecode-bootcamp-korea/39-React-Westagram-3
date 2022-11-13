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
      <div className="mainPage">
        <section className="feed-component">
          <section className="friendsStoryContainer">
            <div className="friendsStoryIndividual">
              <div className="friendsStoryUser1Pic"></div>
              <h4 className="friendsStoryUser1Name" />
              0713.jpg
            </div>
            <div className="friendsStoryIndividual">
              <div className="friendsStoryUser1Pic"></div>
              <h4 className="friendsStoryUser1Name" />
              0713.jpg
            </div>
            <div className="friendsStoryIndividual">
              <div className="friendsStoryUser1Pic"></div>
              <h4 className="friendsStoryUser1Name" />
              0713.jpg
            </div>
            <div className="friendsStoryIndividual">
              <div className="friendsStoryUser1Pic"></div>
              <h4 className="friendsStoryUser1Name" />
              0713.jpg
            </div>
          </section>
          <FeedList />
        </section>
        <aside className="rightContainer">
          <div className="rightContainerMyBio">
            <img src="/images/img.dabinlee/feedimg.jpg" alt="mybiopic" />
            <ul>
              <li className="rightContainerId">0713.jpg</li>
              <li className="rightContainerName">Dalbong</li>
            </ul>
            <button className="rightContainerSwitch">전환</button>
          </div>
          <div className="rightContainerText">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <section className="rightContainerRecommendation">
            <div className="rightContainerReco1">
              <img
                src="/images/img.dabinlee/feedimg.jpg"
                alt="user recommend"
              />
              <ul className="right_container_reco_1_name">
                <li>0713.jpg</li>
                <li>Null 님이 팔로우 합니다</li>
              </ul>
              <button className="right_container_reco_1_btn">팔로우</button>
            </div>{' '}
            <div className="rightContainerReco1">
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
            <div className="rightContainerReco1">
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
          <ul className="asideList">
            {ASIDE_LIST.map(el => {
              return <li key={el.id}>{el.text}•</li>;
            })}
          </ul>
        </aside>
      </div>
    </>
  );
}
