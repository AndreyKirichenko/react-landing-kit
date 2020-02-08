import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './MenuMobile.scss';
import LetterWrapper from '../LetterWrapper';
import { toggleMenu } from '../../actions/page';

const MenuMobile = ({ isMenuVisible, list, toggleMenu }) => {

  const classNames = classnames(
    'menu-mobile',
    {
      'menu-mobile--hidden': !isMenuVisible
    }
  );

  const onToggleMenu = () => {
    toggleMenu();
  };

  const getItems = () => {
    return (
      <ul className='menu-mobile__list'>
        {
          list.map((item) => {
            const { title, url } = item;
            return (
              <li className='menu-mobile__item' key={title} onClick={onToggleMenu}>
                <Link className='menu-mobile__link' to={url}>
                  <LetterWrapper text={title} className='menu-mobile__letter'/>
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

MenuMobile.propTypes = {
  isMenuVisible: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isMenuVisible: state.page.isMenuVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: bindActionCreators(toggleMenu, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuMobile);
