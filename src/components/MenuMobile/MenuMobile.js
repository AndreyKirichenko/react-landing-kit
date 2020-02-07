import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MenuMobile.scss';
import LetterWrapper from '../LetterWrapper';
import { toggleMenu } from '../../actions/page';

class MenuMobile extends Component {
  toggleMenu = () => {
    const { toggleMenu } = this.props;
    toggleMenu();
  };

  getItems() {
    const { list } = this.props;
    return (
      <ul className='menu-mobile__list'>
        {
          list.map((item) => {
            const { title, url } = item;
            return (
              <li className='menu-mobile__item' key={item} onClick={this.toggleMenu}>
                <Link className='menu-mobile__link' to={url}>
                  <LetterWrapper text={title} className='menu-mobile__letter'/>
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className='menu-mobile'>
        {this.getItems()}
      </div>
    );
  }
}

MenuMobile.propTypes = {
  isMenuVisible: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: bindActionCreators(toggleMenu, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(MenuMobile);
