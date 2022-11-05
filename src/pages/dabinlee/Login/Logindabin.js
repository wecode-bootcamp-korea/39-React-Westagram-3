import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logindabin.scss';

export default function Login() {
  function loginBtnOn(e) {
    console.log('clicked the login btn!!!');
    e.preventDefault();
    alert('환영합니다!');
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveUserId = event => {
    setUsername(event.target.value);
    // console.log(username);
  };
  const savePwValue = event => {
    setPassword(event.target.value);
    // console.log(password);
  };

  return (
    <div className="body">
      <div className="login-container">
        <h1 className="instagram-logo">westagram</h1>
        <form
          className="login-box"
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <input
            id="id-input"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={saveUserId}
          />
          <input
            type="password"
            id="password-input"
            placeholder="비밀번호"
            onChange={savePwValue}
          />
          <button
            // disabled
            className="button_ready login-btn"
            onClick={() => {
              console.log('clicked');
            }}
          >
            로그인하기
          </button>
          <h3 className="login-failure_help">비밀번호를 잊으셨나요?</h3>
        </form>
      </div>
    </div>
  );
}
