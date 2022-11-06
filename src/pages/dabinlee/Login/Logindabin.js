import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Logindabin.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const saveUserId = event => {
    setUsername(event.target.value);
  };
  const savePwValue = event => {
    setPassword(event.target.value);
  };

  const isValid = username.indexOf('@') !== -1 && password.length >= 5;
  // -1은 없다임, @가 없지 않다면 && 비밀번호가 길이가 5자 이상이라면 버튼 온!

  const loginSucess = () => {
    isValid ? navigate('/main-dabin') : alert('비밀번호를 확인해주세요!');
    //navigate의 소문자
  };

  const disable = isValid ? false : true;

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
            disabled={disable}
            className={'loginBtn'}
            onClick={loginSucess}
          >
            로그인하기
          </button>
          <h3 className="login-failure_help">비밀번호를 잊으셨나요?</h3>
        </form>
      </div>
    </div>
  );
}
