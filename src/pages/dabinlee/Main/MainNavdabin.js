import React from 'react';
import './MainNavdabin.scss';

export default function MainNavDabin() {
  return (
    <nav id="topNav">
      <div className="top_nav__icon_right">
        <img
          src="/images/img.dabinlee/instagram.png"
          alt="nav__instagram_graphic_icon"
        />
        <div className="top_nav__bar"></div>
        <h2 className="instagram_logo">westagram</h2>
      </div>
      <input type="text" id="nav__search" placeholder="🔍 검색" />
      <div className="top_nav__icon_left">
        <img
          src="/images/img.dabinlee/explore.png"
          alt="nav__navigation_icon"
        />
        <img src="/images/img.dabinlee/heart.png" alt="nav__heart_icon" />
        <img src="/images/img.dabinlee/profile.png" alt="nav__bio_icon" />
      </div>
    </nav>
  );
}
