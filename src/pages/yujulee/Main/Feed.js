import React, { useState, useEffect } from 'react';
import Article from './Article';

function Feed() {
  //mock data
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch('/data/yujulee/mockdata.json')
      .then(response => response.json())
      .then(result => setUserInfo(result));
  }, []);
  const feed = userInfo.map((feeddata, i) => {
    return <Article feeddata={feeddata} key={i} />;
  });
  return feed;
}

export default Feed;
