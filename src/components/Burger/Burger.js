import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Burger.scss';
import { toggleMobileMenuOpened } from '../../actions/mobileMenu';
import LetterWrapper from '../LetterWrapper';

const Burger = ({ isMobileMenuOpened, toggleMobileMenuOpened }) => {
  const onToggleMenu = () => {
    toggleMobileMenuOpened();
  };

  const openTextClassNames =
    classnames(
      'burger__text',
      'burger__text--open',
      {
        'burger__text--visible': !isMobileMenuOpened
      }
    );

  const closeTextClassNames =
    classnames(
      'burger__text',
      'burger__text--open',
      {
        'burger__text--visible': isMobileMenuOpened
      }
    );

  return (
    <div
      className='burger burger--with-initial-animation'
      onClick={onToggleMenu}
    >
      <div className={openTextClassNames}>
        <LetterWrapper
          text={'Menu'}
          className='burger__letter'/>
      </div>

      <div className={closeTextClassNames}>
        <LetterWrapper
          text={'Close'}
          className='burger__letter'
        />
      </div>
    </div>
  );
};

Burger.propTypes = {
  isMobileMenuOpened: PropTypes.bool,
  toggleMobileMenuOpened: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isMobileMenuOpened: state.mobileMenu.isMobileMenuOpened,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMobileMenuOpened: bindActionCreators(toggleMobileMenuOpened, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
