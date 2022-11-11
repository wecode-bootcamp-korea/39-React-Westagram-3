import React from 'react';

export default function Comment(props) {
  const { contents } = props;
  return (
    <li>
      <span>0713.jpg </span>
      {contents}
    </li>
  );
}
