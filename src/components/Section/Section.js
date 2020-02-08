import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Section.scss';

const Section = ({ isMenuVisible, toggleMenu }) => {

  return (
    <section
      className='section'
    >
      Секция
    </section>
  );
};

Section.propTypes = {
  isMenuVisible: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isMenuVisible: state.page.isMenuVisible,
});

export default connect(mapStateToProps, null)(Section);
