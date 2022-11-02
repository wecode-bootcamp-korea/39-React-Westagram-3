import React from 'react';

function Article(){
    return(
        <article>
            <div className="feedname">
                <img className="preview" src="/images/photo6.jpg" width="100%" alt="feed" />
                <span>yuzu_like</span>
                <span className="friends">대한민국</span>
                <i className="fa-solid fa-ellipsis"></i>
            </div>
            <img className="feedimg" src="/images/photo8.jpeg" width="100%" alt="feed" /><br />
            <div className="feedtalk">
                <i className="fa-regular fa-heart press"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-regular fa-paper-plane"></i><br />
                <div>좋아요 25개</div>
                <div> yuzu_like 놀러가구싶다!!</div>
                <div className="date">1일 전</div> 
                <ul className="writes">
                    <li className="write">

                    </li>
                </ul>
            </div>
            <div className="comment">
                <i className="smileface fa-regular fa-face-smile"></i>
                <input type="text" className="commentbox" placeholder="댓글 달기..." />
                <button className="inputcomment" disable>게시</button>
            </div>
        </article>
    )
}

export default Article;