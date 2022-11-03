import React, { useState } from 'react';
import './Loginyuju.scss';


  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main>
      <h1 className="title">Westagram</h1>
      <div className="typeid">
        <input
          type="text"
          className="idinput"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
      </div>
      <div className="typepw">
        <input type="password" className="pwinput" placeholder="비밀번호" />
      </div>
      <div className="login">
        <button onClick={() => {}} className="loginbtn" disabled>
          로그인
        </button>
      </div>
      <div className="forget">비밀번호를 잊으셨나요?</div>
    </main>
  );
}
export default Loginyuju;
