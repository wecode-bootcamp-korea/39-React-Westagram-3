import React from 'react';
import './Loginboyoon.scss';
import { useNavigate } from 'react-router-dom';

const Loginboyoon = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('../main-boyoon');
  };

  return (
    <div className="loginPage">
      <header className="loginPageContent">
        <div className="logo">Westagram</div>

        <div className="inputBoxes">
          <input
            className="inputId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input className="inputPw" type="password" placeholder="비밀번호" />
          <button className="loginBtn" onClick={goToMain} /*disabled*/>
            로그인
          </button>
        </div>

        <div className="findPassword">
          <p href="#">비밀번호를 잊으셨나요?</p>
        </div>
      </header>
    </div>
  );
};

export default Loginboyoon;
