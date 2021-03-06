import React from 'react';
import { Link } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <Link style={{ textDecoration: 'none' }} to={title}>
          <h1 className='title'>{title.toUpperCase()}</h1>
        </Link>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
