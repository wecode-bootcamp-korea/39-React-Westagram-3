import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logindabin.scss';

export default function Login() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = inputValue;
  const isValid = id.includes('@') && pw.length >= 5;

  const handleUserInfo = e => {
    const { name, value } = e.target;
    setInputValue(prev => ({ ...prev, [name]: value }));
  };

  const signIn = () => {
    fetch('http://10.58.52.220:3000/auth/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValue.id,
        password: inputValue.pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('로그인 실패');
      })
      .catch(error => alert('비밀번호를 확인해주세요!'))
      .then(data => {
        localStorage.setItem('TOKEN', data.accessToken);
        alert('로그인 성공');
        navigate('/main-dabin');
      });
  };

  return (
    <div className="Logindabin">
      <div className="loginContainer">
        <h1 className="instagramLogo">westagram</h1>
        <div className="loginBox">
          <input
            className="idInput"
            name="id"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={handleUserInfo}
          />
          <input
            className="passwordInput"
            name="pw"
            type="password"
            placeholder="비밀번호"
            onChange={handleUserInfo}
          />
          <button disabled={!isValid} className="loginBtn" onClick={signIn}>
            로그인하기
          </button>
          <h3 className="loginFailureHelp">비밀번호를 잊으셨나요?</h3>
        </div>
      </div>
    </div>
  );
}
