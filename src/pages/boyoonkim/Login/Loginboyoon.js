import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Loginboyoon.scss';

const Loginboyoon = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-boyoon');
  };

  // const [id, setId] = useState('');
  // const [pw, setPw] = useState('');

  // const saveUserId = event => {
  //   setId(event.target.value);
  // };

  // const saveUserPw = event => {
  //   setPw(event.target.value);
  // };

  const [userInfo, setUserInfo] = useState({ id: '', pw: '' });

  const handlerUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { id, pw } = userInfo;
  const valid = id.includes('@') && pw.length >= 5;

  const pressEnter = e => {
    if (e.code === 'Enter' && valid === true) {
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
        localStorage.setItem('token', data);
        goToMain();
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
              name="id"
              onChange={handlerUserInfo}
              onKeyUp={pressEnter}
            />
            <input
              className="inputPw"
              type="password"
              placeholder="비밀번호"
              name="pw"
              onChange={handlerUserInfo}
              onKeyUp={pressEnter}
            />
            <button className="loginBtn" onClick={login} disabled={!valid}>
              로그인
            </button>
          </div>

          <div className="findPassword">
            <Link to={goToMain}>비밀번호를 잊으셨나요?</Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Loginboyoon;
