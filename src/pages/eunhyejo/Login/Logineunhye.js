import React from 'react';
import './Logineunhye.scss';

function Logineunhye() {
  return (
    <>
      <div className="main-container">
        <h1 className="title">Westagram</h1>
        <div className="loginContainer">
          <input
            className="inputinfo"
            id="inputId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="inputinfo"
            id="inputPw"
            type="password"
            placeholder="비밀번호"
          />
          <button className="inputinfo btn" id="login-btn">
            로그인
          </button>
        </div>
        <a className="pwFinding" href="">
          비밀번호를 잊으셨나요?{' '}
        </a>
      </div>
    </>
  );
}

export default Logineunhye;
