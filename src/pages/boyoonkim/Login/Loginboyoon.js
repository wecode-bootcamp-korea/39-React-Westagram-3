import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginboyoon.scss';

const Loginboyoon = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-boyoon');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const saveUserId = event => {
    setId(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const valid = id.includes('@') && pw.length >= 5;

  const disabled = valid ? false : true;

  const pressEnter = e => {
    if (e.code === 'Enter' && disabled === false) {
      goToMain();
    }
  };

  const login = () => {
    fetch('http://10.58.52.182:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: id, password: pw }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('token', data);
        goToMain();
      });
  };

  const signup = () => {
    fetch('http://10.58.52.182:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: id, password: pw }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data);
      });
  };

  return (
    <div className="login">
      <div className="loginPage">
        <header className="loginPageContent">
          <div className="logo">Westagram</div>

          <div className="inputBoxes">
            <input
              className="inputId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={id}
              onChange={saveUserId}
              onKeyUp={pressEnter}
            />
            <input
              className="inputPw"
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={saveUserPw}
              onKeyUp={pressEnter}
            />
            <button className="loginBtn" onClick={login} disabled={disabled}>
              로그인
            </button>

            <button className="loginBtn" onClick={signup} disabled={disabled}>
              회원가입
            </button>
          </div>

          <div className="findPassword">
            <p href="#">비밀번호를 잊으셨나요?</p>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Loginboyoon;
