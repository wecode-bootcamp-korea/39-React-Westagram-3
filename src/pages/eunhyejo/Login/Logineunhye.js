import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Logineunhye.scss';

function Logineunhye() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [btn, setBtn] = useState(true);
  const valCheck = id.includes('@') && pw.length > 2;

  const inputId = e => {
    setId(e.target.value);
  };

  const inputPw = e => {
    setPw(e.target.value);
  };

  const btnActive = () => {
    valCheck ? setBtn(false) : setBtn(true);
  };

  const goToMain = () => {
    if (valCheck) {
      fetch('http://10.58.52.196:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: id,
          password: pw,
        }),
      })
        .then(response => response.json())
        .then(data => console.log(data));
    }
  };

  return (
    <>
      <div className="main-container">
        <h1 className="title">Westagram</h1>
        <div className="loginContainer">
          <input
            type="text"
            className="inputinfo"
            id="inputId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={inputId}
            onKeyUp={btnActive}
            onKeyPress={e => {
              if (e.key === 'Enter' && btn === 'false') {
                goToMain();
              }
            }}
          />
        </div>
        <div className="form-input">
          <input
            type="password"
            className="inputinfo"
            id="inputPw"
            placeholder="비밀번호"
            onChange={inputPw}
            onKeyUp={btnActive}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                goToMain();
              }
            }}
          />
        </div>
        <button
          type="button"
          className="btn-login"
          disabled={btn}
          onClick={goToMain}
        >
          <span>로그인</span>
        </button>
      </div>
      <div className="info">
        <a target="blank">비밀번호를 잊으셨나요?</a>
      </div>
    </>
  );
}

export default Logineunhye;
