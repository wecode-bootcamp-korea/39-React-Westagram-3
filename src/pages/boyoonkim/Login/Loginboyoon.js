import React, { useState } from 'react';
import './Loginboyoon.scss';
import { useNavigate } from 'react-router-dom';

const Loginboyoon = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('../main-boyoon');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const saveUserId = event => {
    setId(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
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
            onChange={saveUserId}
          />
          <input
            className="inputPw"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          <button className="loginBtn" onChange={goToMain} disabled>
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
