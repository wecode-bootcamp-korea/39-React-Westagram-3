import React from 'react';
import { MENU_LIST } from '../../pages/boyoonkim/uiData';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <span className="footerList">
        {MENU_LIST.map(menuList => {
          return <span key={menuList.id}>{menuList.menuName}</span>;
        })}
      </span>
    </div>
  );
};

export default Footer;
