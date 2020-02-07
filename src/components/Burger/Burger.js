import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleMenu } from '../../actions/page';
import classnames from 'classnames';

import './Burger.scss';
import LetterWrapper from '../LetterWrapper';

class Burger extends Component {
  toggleMenu = () => {
    this.props.toggleMenu();
  };

  render() {
    const { isMenuVisible } = this.props;

    const openTextClassNames =
      classnames(
        'burger__text',
        'burger__text--open',
        {
          'burger__text--visible': !isMenuVisible
        }
      );

    const closeTextClassNames =
      classnames(
        'burger__text',
        'burger__text--open',
        {
          'burger__text--visible': isMenuVisible
        }
      );

    return (
      <div
        className='burger burger--with-initial-animation'
        onClick={this.toggleMenu}
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
  }
}

Burger.propTypes = {
  isMenuVisible: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isMenuVisible: state.page.isMenuVisible,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: bindActionCreators(toggleMenu, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
