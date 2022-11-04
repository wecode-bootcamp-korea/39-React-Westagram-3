import React from 'react';
import './Logindabin.scss';

function loginBtnOn(e) {
  console.log('clicked the login btn!!!');
  e.preventDefault();
  alert('환영합니다!');
}

export default function Login() {
  const idValue = null;

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
            // onKeyUp={event => {
            //   idvalue = event.target.value;
            // }}
          />
          <input
            type="password"
            id="password-input"
            placeholder="비밀번호"
            onKeyUp={event => {
              console.log(event);
            }}
          />
          <button
            // disabled
            className="button_a login-btn"
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
