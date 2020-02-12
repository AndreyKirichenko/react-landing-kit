import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Section.scss';

const Section = ({ scrollY }) => {

  return (
    <section
      className='section'
    >
      {scrollY}
    </section>
  );
};

Section.propTypes = {
  scrollY: PropTypes.number,
};

const mapStateToProps = (state) => ({
  scrollY: state.page.scrollY,
});

export default connect(mapStateToProps, null)(Section);
