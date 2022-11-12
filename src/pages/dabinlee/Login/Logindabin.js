import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const loginSucess = () => {
    isValid ? navigate('/main-dabin') : alert('비밀번호를 확인해주세요!');
  };

  const pressEnter = e => {
    if (isValid === true && e.keyCode === 13) {
      fetch('http://10.58.52.220:3000/auth/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      })
        .then(response => {
          if (response.ok === true) {
            return response.json();
          }
          throw new Error('로그인 실패');
        })
        .catch(error => alert('로그인 실패'))
        .then(data => {
          localStorage.setItem('TOKEN', data.accessToken);
          alert('로그인 성공');
          navigate('/main-dabin');
        });
    }
  };

  const disable = isValid ? false : true;

  return (
    <div className="body">
      <div className="login-container">
        <h1 className="instagram-logo">westagram</h1>
        <div className="login-box">
          <input
            id="id-input"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={saveUserId}
            onKeyDown={pressEnter}
          />
          <input
            type="password"
            id="password-input"
            placeholder="비밀번호"
            onChange={savePwValue}
            onKeyDown={pressEnter}
          />
          <button disabled={disable} className="loginBtn" onClick={loginSucess}>
            로그인하기
          </button>
          <h3 className="login-failure_help">비밀번호를 잊으셨나요?</h3>
        </div>
      </div>
    </div>
  );
}
