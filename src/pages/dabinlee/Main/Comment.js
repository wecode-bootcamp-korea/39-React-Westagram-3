import React from 'react';
import './Comment.scss';

export default function Comment(props) {
  const { contents } = props;
  return (
    <li>
      <span>0713.jpg </span>
      {contents}
    </li>
  );
}
