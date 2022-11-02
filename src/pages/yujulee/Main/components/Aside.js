import React from 'react';


function Aside(){
    return (
    <aside>
        <div className="feedname">
            <img className="profile" src="/images/photo6.jpg" alt="me" />
            <span>yuzu_like</span>
            <span className="friends">이유주</span>
            <span className="follow">전환</span>
        </div>

        <span className="all">회원님을 위한 추천</span>
        <span className="viewall">모두 보기</span>      
        <div className="feedname">
            <img className="preview" src="/images/photo3.jpeg" alt="recommend" />
            <span>wecode_bootcamp</span>
            <span className="friends">wylee0930님, oh_vet94님 외 13명이 팔로</span>
            <span className="follow">팔로우</span>
        </div>
        <div className="feedname">
            <img className="preview" src="/images/photo6.jpg" alt="recommend" />
            <span>who_who</span>
            <span className="friends">oh_vet94님, hongjye__님 외 11명이 팔로우</span>
            <span className="follow">팔로우</span>
        </div>
        <div className="feedname">
            <img className="preview" src="/images/photo7.jpg" alt="recommend" />
            <span>sunnny_day</span>
            <span className="friends">Instagram 신규 가입</span>
            <span className="follow">팔로우</span>
        </div>
        <div className="feedname">
            <img className="preview" src="/images/photo8.jpeg" alt="recommend" />
            <span>forever_for</span>
            <span  className="friends">s0.jeon님과 yeah915님이 팔로우합니다</span>
            <span className="follow">팔로우</span>
        </div>
        <div className="feedname">
            <img className="preview" src="/images/photo2.jpeg" alt="recommend" />
            <span>i_likeeee</span>
            <span  className="friends">회원님을 위한 추천</span>
            <span className="follow">팔로우</span>
        </div>
</aside>
)
}
export default Aside;   