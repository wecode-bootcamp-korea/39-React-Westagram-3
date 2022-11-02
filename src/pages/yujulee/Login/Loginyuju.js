import React from 'react';
import './Login.css';

function Loginyuju(){
    return (
        <main>
            <h1>Westagram</h1>
            <div className="typeid">
                <input type="text" className="idinput" placeholder="전화번호, 사용자 이름 또는 이메일" /> 
            </div>
            <div className="typepw">
                <input type="password" className="pwinput" placeholder="비밀번호" />
            </div>
            <div className="login">
                <button className="loginbtn" disabled>로그인</button>
            </div>
            <div className="forget">비밀번호를 잊으셨나요?</div>
        </main>
        );
    }
export default Loginyuju;