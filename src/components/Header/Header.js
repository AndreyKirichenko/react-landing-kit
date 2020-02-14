import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Header.scss';

import HeaderLogo from '../HeaderLogo';
import MobileMenu from '../MobileMenu';
import DesktopMenu from '../DesktopMenu';
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

const Header = ({ scrollY, viewportWidth }) => {

  const [ withBackground, setWithBackground ] = useState(false);

  useEffect(() => {
    setWithBackground(scrollY > MAX_TRANSPARENT_SCROLL_Y);
  }, [scrollY]);

  const isMobile = viewportWidth < MEDIA_NAV;

  const classNames = classnames(
    'header',
    {
      'header--with-background': withBackground,
    }
  );

  return (
    <header className={classNames}>
      {isMobile && <MobileMenu list={MENU_ITEMS} />}

      <div className='header__logo'>
        <HeaderLogo />
      </div>

      {!isMobile && (
        <div className='header__menu'>
          <DesktopMenu list={MENU_ITEMS} />
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
  viewportWidth: PropTypes.number,
};

const mapStateToProps = (state) => ({
  scrollY: state.page.scrollY,
  viewportWidth: state.page.viewportWidth,
});

export default connect(mapStateToProps)(Header);
