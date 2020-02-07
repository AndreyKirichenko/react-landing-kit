import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MenuDesktop.scss';
import LetterWrapper from '../LetterWrapper';


class MenuDesktop extends Component {
  getItems() {
    const { list } = this.props;

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
  }

  render() {
    return (
      <ul className='menu-desktop menu-desktop--with-initial-animations'>
        {this.getItems()}
      </ul>
    );
  }
}

MenuDesktop.propTypes = {
  list: PropTypes.array,
};

export default MenuDesktop;