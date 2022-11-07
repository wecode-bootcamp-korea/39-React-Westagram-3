import React, { useState } from 'react';
import './Loginyuju.scss';
import { useNavigate } from 'react-router-dom';

function Loginyuju() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);

  function saveUserId(event) {
    setId(event.target.value);
  }
  function saveUserPw(event) {
    setPassword(event.target.value);
  }
  function isActive() {
    return password.length > 5 && id.length > 0
      ? setActive(true)
      : setActive(false);
  }
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yuju');
  };

  return (
    <main className="loginall">
      <h1 className="title">Westagram</h1>
      <div className="typeid">
        <input
          type="text"
          className="idinput"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
          onKeyUp={isActive}
        />
      </div>
      <div className="typepw">
        <input
          type="password"
          className="pwinput"
          placeholder="비밀번호"
          onChange={saveUserPw}
          onKeyUp={isActive}
        />
      </div>
      <div className="login">
        <button
          className={active ? 'activebtn' : 'unactivebtn'}
          disabled={active ? false : true}
          onClick={goToMain}
        >
          로그인
        </button>
      </div>
      <div className="forget">비밀번호를 잊으셨나요?</div>
    </main>
  );
}
export default Loginyuju;
