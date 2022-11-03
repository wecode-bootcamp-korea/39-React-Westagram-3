import React from 'react';
import './Logindabin.scss';

export default function Login() {
  return (
    <>
      <div className="login-container">
        <h1 className="instagram-logo">westagram</h1>
        <form className="login-box">
          <input
            id="id-input"
            type="text"
            placeholder="아이디를 입력해주세요"
            onKeyUp={() => idKeyUp()}
          />
          <input
            type="password"
            id="password-input"
            placeholder="비밀번호"
            onKeyUp={() => pwKeyUp()}
          />
          <button
            // disabled
            className="button_a login-btn"
            onSubmit={() => idSubmit()}
          >
            로그인하기
          </button>
          <h3 className="login-failure_help">비밀번호를 잊으셨나요?</h3>
        </form>
      </div>
    </>
  );
}

function idKeyUp(event) {
  console.log('This is ID!');
}

function pwKeyUp(event) {
  console.log('This is PW!!');
}

function idSubmit() {
  console.log('Want to submit?');
}

// on+eventListner jsx에 태그에 속성값을(중괄호로 넣고) 으로 주고
// 밖(어디서든..)에서 함수를 선언 [연결해준다]
