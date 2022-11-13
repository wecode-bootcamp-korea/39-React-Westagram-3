import React from 'react';
import './MainNavdabin.scss';

export default function MainNavDabin() {
  return (
    <nav id="topNav">
      <div className="topNavIconRight">
        <img
          src="/images/img.dabinlee/instagram.png"
          alt="navInstagramGraphicIcon"
        />
        <div className="topNavBar"></div>
        <h2 className="instagramLogo">westagram</h2>
      </div>
      <input type="text" id="navSearch" placeholder="🔍 검색" />
      <div className="topNavIconLeft">
        <img src="/images/img.dabinlee/explore.png" alt="navNavigationIcon" />
        <img src="/images/img.dabinlee/heart.png" alt="navHeartIcon" />
        <img src="/images/img.dabinlee/profile.png" alt="navBioIcon" />
      </div>
    </nav>
  );
}
