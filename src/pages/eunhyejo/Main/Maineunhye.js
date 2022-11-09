import React from 'react';

function Maineunhye() {
  return (
    <>
      <header>
        {/* <!-- navbar -->} */}
        <nav className="navbar">
          <div className="navbar-logo">Westagram</div>
          <div className="container-search">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input className="search" placeholder="검색" />
          </div>

          <ul className="menu">
            <li className="menu-item">
              <i className="fa-solid fa-house"></i>
            </li>
            <li className="menu-item">
              <i className="fa-regular fa-paper-plane"></i>
            </li>
            <li className="menu-item">
              <i className="fa-regular fa-square-plus"></i>
            </li>
            <li className="menu-item">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="탐색"
                width="20px"
                height="20px"
              />
            </li>
            <li className="menu-item">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="좋아요"
                width="20px"
                height="20px"
              />
            </li>
            <li className="menu-item">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="마이페이지"
                width="20px"
                height="20px"
              />
            </li>
          </ul>
        </nav>
      </header>
      {/* <!-- 메인 -->} */}
      <main className="main">
        {/* <!-- 메인단 왼쪽 --> */}
        <article className="main-left">
          {/* <!-- 스토리 --> */}
          <div className="stories">
            <ul className="story">
              <li>
                <img
                  className="story-profile"
                  src="instagram.img/스토리 프로필 이미지.jpeg"
                  alt="스토리 프로필이미지"
                />
                <span className="story-id">eunhye_20s</span>
              </li>
              <li>
                <img
                  className="story-profile"
                  src="instagram.img/아이유 인스타 프사.jpeg"
                  alt="스토리 프로필이미지"
                />
                <span className="story-id">dlwlrma</span>
              </li>
              <li>
                <img
                  className="story-profile"
                  src="instagram.img/백예린 인스타 프사.jpeg"
                  alt="스토리 프로필이미지"
                />
                <span className="story-id">wecode</span>
              </li>
              <li>
                <img
                  className="story-profile"
                  src="instagram.img/백예린 인스타 프사.jpeg"
                  alt="스토리 프로필이미지"
                />
                <span className="story-id">yerin_the_genuine</span>
              </li>
              <li>
                <img
                  className="story-profile"
                  src="instagram.img/제니 프로필 사진.jpeg"
                  alt="스토리 프로필이미지"
                />
                <span className="story-id">jennie</span>
              </li>
              <li>
                <img
                  className="story-profile"
                  src="instagram.img/대한민국 인스타 프사.jpeg"
                  alt="스토리 프로필이미지"
                />
                <span className="story-id">korea_lover</span>
              </li>
            </ul>
          </div>
          {/* <!-- 피드 --> */}
          <div className="feed">
            <div className="feed-header">
              <div className="feed-logo">
                <img
                  className="feed-profile"
                  src="instagram.img/스토리 프로필 이미지.jpeg"
                  alt="피드 프로필이미지"
                />
                eunhye_20s
              </div>
              <i className="fa-solid fa-ellipsis feed-menu"></i>
            </div>
            <div className="feed-article">
              <img
                className="feed-img"
                src="instagram.img/러버덕.JPG"
                alt="피드 사진"
              />
            </div>
            <div className="feed-list">
              <div className="feed-left_list">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-regular fa-paper-plane"></i>
              </div>
              <div className="feed-middle_list">
                <span className="middle-dot"></span>
                <span className="middle-dot"></span>
                <span className="middle-dot"></span>
                <span className="middle-dot"></span>
                <span className="middle-dot"></span>
                <span className="middle-dot"></span>
              </div>
              <div className="feed-right_list">
                <i className="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <div className="feed-description">
              <div className="description-like">좋아요 13,460개</div>
              <div className="description-article">
                <div className="article-info">
                  <div className="ariticle-id">eunhye_20s</div>
                  <div className="article-description">귀여운 러버덕!</div>
                </div>

                <div className="article-more">...더보기</div>
              </div>
              <div className="description-commentAll">댓글 492개 모두 보기</div>
              <ul id="commentList">
                <li className="description-comment">
                  <div className="article-info">
                    <div className="ariticle-id">dlwlrma</div>
                    <div className="article-description">귀여워라</div>
                  </div>
                  <div className="comment-function">
                    <button className="comment-delete">삭제</button>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </li>
              </ul>
            </div>
            <div className="description-date">2일 전</div>
            <div className="feed-footer">
              <div className="footer-logo">
                <div className="footer-smile">
                  <i className="fa-regular fa-face-smile"></i>
                </div>
                <div className="footer-comment">
                  <input
                    className="comment-input"
                    type="text"
                    placeholder="댓글달기"
                  />
                </div>
              </div>
              <div className="footer-enter">
                <button className="comment-btn btn">게시</button>
              </div>
            </div>
          </div>
        </article>
        {/* <!-- 메인단 오른쪽 --> */}
        <article className="main-right">
          <div className="right-container">
            {/* <!-- 나의 프로필 --> */}
            <div className="myProfile">
              <div className="myProfile-logo">
                <div className="profile-img">
                  <img
                    className="story-profile"
                    src="instagram.img/스토리 프로필 이미지.jpeg"
                    alt="오른쪽 아티클 내 프로필사진"
                  />
                </div>
                <div className="profile-info">
                  <div className="profile-id">eunhye_20s</div>
                  <div className="profile-name">조은혜</div>
                </div>
              </div>
              <div className="profile-change">
                <button className="comment-btn btn">전환</button>
              </div>
            </div>
            {/* <!-- 유저 추천 --> */}
            <div className="recommand">
              <div className="recommand-title">
                <div className="title-1">회원님을 위한 추천</div>
                <div className="title-2">
                  <button className="recommand-btn">모두 보기</button>
                </div>
              </div>
              <div className="recommend-user">
                <div className="recoProfile">
                  <ul className="recoProfile">
                    <li className="recoProfile-list">
                      <div className="recoProfile-logo">
                        <div className="recoprofile-img">
                          <img
                            className="reco-profile"
                            src="instagram.img/인스타 프사 추천.png"
                            alt="추천친구 프로필이미지"
                          />
                        </div>
                        <div className="reco-profile-info">
                          <div className="reco-profile-id">bright_89</div>
                          <div className="reco-profile-name">
                            eunhye_20s 외 1명이 팔로우중입니다.
                          </div>
                        </div>
                      </div>
                      <div className="profile-follow">
                        <button className="follow-btn btn">팔로우</button>
                      </div>
                    </li>
                    <li className="recoProfile-list">
                      <div className="recoProfile-logo">
                        <div className="recoprofile-img">
                          <img
                            className="reco-profile"
                            src="instagram.img/추천친구1.png"
                            alt="추천친구 프로필이미지"
                          />
                        </div>
                        <div className="reco-profile-info">
                          <div className="reco-profile-id">love_you</div>
                          <div className="reco-profile-name">
                            eunhye_20s 외 1명이 팔로우중입니다.
                          </div>
                        </div>
                      </div>
                      <div className="profile-follow">
                        <button className="follow-btn btn">팔로우</button>
                      </div>
                    </li>
                    <li className="recoProfile-list">
                      <div className="recoProfile-logo">
                        <div className="recoprofile-img">
                          <img
                            className="reco-profile"
                            src="instagram.img/추천친구2.png"
                            alt="추천친구 프로필이미지"
                          />
                        </div>
                        <div className="reco-profile-info">
                          <div className="reco-profile-id">happydogs</div>
                          <div className="reco-profile-name">
                            eunhye_20s 외 1명이 팔로우중입니다.
                          </div>
                        </div>
                      </div>
                      <div className="profile-follow">
                        <button className="follow-btn btn">팔로우</button>
                      </div>
                    </li>
                    <li className="recoProfile-list">
                      <div className="recoProfile-logo">
                        <div className="recoprofile-img">
                          <img
                            className="reco-profile"
                            src="instagram.img/추천친구3.jpeg"
                            alt="추천친구 프로필이미지"
                          />
                        </div>
                        <div className="reco-profile-info">
                          <div className="reco-profile-id">goguma</div>
                          <div className="reco-profile-name">
                            eunhye_20s 외 1명이 팔로우중입니다.
                          </div>
                        </div>
                      </div>
                      <div className="profile-follow">
                        <button className="follow-btn btn">팔로우</button>
                      </div>
                    </li>
                    <li className="recoProfile-list">
                      <div className="recoProfile-logo">
                        <div className="recoprofile-img">
                          <img
                            className="reco-profile"
                            src="instagram.img/추천친구4.jpeg"
                            alt="추천친구 프로필이미지"
                          />
                        </div>
                        <div className="reco-profile-info">
                          <div className="reco-profile-id">sujeong</div>
                          <div className="reco-profile-name">
                            eunhye_20s 외 1명이 팔로우중입니다.
                          </div>
                        </div>
                      </div>
                      <div className="profile-follow">
                        <button className="follow-btn btn">팔로우</button>
                      </div>
                    </li>
                    <li className="recoProfile-list">
                      <div className="recoProfile-logo">
                        <div className="recoprofile-img">
                          <img
                            className="reco-profile"
                            src="instagram.img/인스타 프사 추천.png"
                            alt="추천친구 프로필이미지"
                          />
                        </div>
                        <div className="reco-profile-info">
                          <div className="reco-profile-id">sleepy</div>
                          <div className="reco-profile-name">
                            eunhye_20s 외 1명이 팔로우중입니다.
                          </div>
                        </div>
                      </div>
                      <div className="profile-follow">
                        <button className="follow-btn btn">팔로우</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- footer --> */}
            <footer className="footer">
              <ul className="recommand-footer">
                <li className="footer-list">소개</li>
                <li className="footer-list">도움말</li>
                <li className="footer-list">홍보센터</li>
                <li className="footer-list">API</li>
                <li className="footer-list">채용정보</li>
                <li className="footer-list">개인정보처리방침</li>
                <br />
                <li className="footer-list">약관</li>
                <li className="footer-list">위치</li>
                <li className="footer-list">언어</li>
              </ul>
              <span className="copyright footer">
                <i className="fa-regular fa-copyright"></i>
                2022 westagram from eunhye
              </span>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}

export default Maineunhye;
