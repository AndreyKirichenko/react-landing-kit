import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './DesktopMenu.scss';
import LetterWrapper from '../LetterWrapper';


const DesktopMenu = ({ list }) => {
  const getItems = () => {
    return list.map((item) => {
      const { title, url } = item;
      return (
        <li className='desktop-menu__item' key={title}>
          <Link className='desktop-menu__link' to={url.toLowerCase()}>
            <LetterWrapper text={title} className='desktop-menu__letter' />
          </Link>
        </li>
      );
    });
  };

  return (
    <ul className='desktop-menu desktop-menu--with-initial-animations'>
      {getItems()}
    </ul>
  );
};

DesktopMenu.propTypes = {
  list: PropTypes.array,
};

export default DesktopMenu;