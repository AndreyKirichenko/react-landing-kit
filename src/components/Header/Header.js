import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Header.scss';

import HeaderLogo from '../HeaderLogo';
import MenuMobile from '../MenuMobile';
import MenuDesktop from '../MenuDesktop';
import Burger from '../Burger';

const MAX_TRANSPARENT_SCROLL_Y = 64;

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

const Header = ({ scrollY, width }) => {

  const [ withBackground, setWithBackground ] = useState(false);

  useEffect(() => {
    setWithBackground(scrollY > MAX_TRANSPARENT_SCROLL_Y);
  }, [scrollY]);

  const isMobile = width < MEDIA_NAV;

  const classNames = classnames(
    'header',
    {
      'header--with-background': withBackground,
    }
  );

  return (
    <header className={classNames}>
      {isMobile && <MenuMobile list={MENU_ITEMS} />}
      <div className='header__logo'>
        <HeaderLogo />
      </div>

      {!isMobile && (
        <div className='header__menu'>
          <MenuDesktop list={MENU_ITEMS} />
        </div>
      )}

      {
        isMobile && (
          <div className='header__burger'>
            <Burger />
          </div>
        )
      }
    </header>
  );
};

Header.propTypes = {
  scrollY: PropTypes.number,
  width: PropTypes.number,
};

const mapStateToProps = (state) => ({
  scrollY: state.page.scrollY,
  width: state.page.width,
});

export default connect(mapStateToProps)(Header);
