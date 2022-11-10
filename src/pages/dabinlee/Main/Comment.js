import React from 'react';

export default function Comment({ commentList }) {
  return (
    <div className="commentList">
      <ul>
        {commentList.map((comment, index) => (
          <li key={index}>
            {' '}
            <span>0713.jpg </span>
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}
//??????????????????????????
