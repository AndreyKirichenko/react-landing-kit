import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MenuDesktop.scss';
import LetterWrapper from '../LetterWrapper';


const MenuDesktop = ({ list }) => {
  const getItems = () => {
    return list.map((item) => {
      const { title, url } = item;
      return (
        <li className='menu-desktop__item' key={title}>
          <Link className='menu-desktop__link' to={url.toLowerCase()}>
            <LetterWrapper text={title} className='menu-desktop__letter' />
          </Link>
        </li>
      );
    });
  };

  return (
    <ul className='menu-desktop menu-desktop--with-initial-animations'>
      {getItems()}
    </ul>
  );
};

MenuDesktop.propTypes = {
  list: PropTypes.array,
};

export default MenuDesktop;