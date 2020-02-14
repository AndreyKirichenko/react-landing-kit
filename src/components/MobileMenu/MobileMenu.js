import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './MobileMenu.scss';
import LetterWrapper from '../LetterWrapper';
import { toggleMobileMenuOpened } from '../../actions/mobileMenu';

const MobileMenu = ({ isMobileMenuOpened, list, toggleMobileMenuOpened }) => {

  const classNames = classnames(
    'mobile-menu',
    {
      'mobile-menu--hidden': !isMobileMenuOpened
    }
  );

  const onToggleMenu = () => {
    toggleMobileMenuOpened();
  };

  const getItems = () => {
    return (
      <ul className='mobile-menu__list'>
        {
          list.map((item) => {
            const { title, url } = item;
            return (
              <li className='mobile-menu__item' key={title} onClick={onToggleMenu}>
                <Link className='mobile-menu__link' to={url}>
                  <LetterWrapper text={title} className='mobile-menu__letter'/>
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  };

  return (
    <div className={classNames}>
      {getItems()}
    </div>
  );
};

MobileMenu.propTypes = {
  isMobileMenuOpened: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isMobileMenuOpened: state.mobileMenu.isMobileMenuOpened,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMobileMenuOpened: bindActionCreators(toggleMobileMenuOpened, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
