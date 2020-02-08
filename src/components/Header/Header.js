import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Header.scss';

import HeaderLogo from '../HeaderLogo';
import MenuMobile from '../MenuMobile';
import MenuDesktop from '../MenuDesktop';
import Burger from '../Burger';

const MEDIA_NAV = 960;

const MENU_ITEMS = [
  {
    title: 'About',
    url: '/#about',
  },
  {
    title: 'Team',
    url: '/#team',
  },
  {
    title: 'Contacts',
    url: '/#contacts',
  },
];

const Header = ({ width }) => {

  const isMobile = width < MEDIA_NAV;

  return (
    <header className='header'>
      <div className='header__logo'>
        <HeaderLogo />
      </div>
      <div className='header__menu'>
        {isMobile ? <MenuMobile list={MENU_ITEMS} /> : <MenuDesktop list={MENU_ITEMS} />}
      </div>
      {
        isMobile ? <div className='header__burger'><Burger /></div> : null
      }
    </header>
  );
};

Header.propTypes = {
  isMenuVisible: PropTypes.bool,
  width: PropTypes.number
};

const mapStateToProps = (state) => ({
  isMenuVisible: state.page.isMenuVisible,
  width: state.page.width
});

export default connect(mapStateToProps)(Header);
