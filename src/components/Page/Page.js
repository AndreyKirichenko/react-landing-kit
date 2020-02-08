import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './Page.scss';
import windowListener from '../../helpers/window-listener';
import { setBrowserHeight, setBrowserWidth, setScrollPositionY } from '../../actions/page';
import Header from '../Header';

const Page = ({ setBrowserHeight, setBrowserWidth, setScrollPositionY }) => {
  useEffect(() => {
    windowListener.registerResizeCallback('onPageResize', onResize);
    windowListener.registerScrollCallback('onPageScroll', onScroll);
    setBrowserSizes();

    return () => {
      windowListener.unregisterResizeCallback('onPageResize');
      windowListener.unregisterScrollCallback('onPageScroll');
    };
  });

  const setBrowserSizes = () => {
    setBrowserHeight(window.innerHeight);
    setBrowserWidth(window.innerWidth);
  };

  const onScroll = () => {
    setScrollPositionY(window.scrollY);
  };

  const onResize = () => {
    setBrowserSizes();
  };

  return (
    <Router>
      <div className='page'>
        <div className='page__header'>
          <Header />
        </div>

        <main className='page__main'>
          <section />
          <section />
          <section />
        </main>
      </div>
    </Router>
  );
};

Page.propTypes = {
  setBrowserHeigh: PropTypes.func,
  setBrowserWidth: PropTypes.func,
  setScrollPositionY: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBrowserHeight: bindActionCreators(setBrowserHeight, dispatch),
    setBrowserWidth: bindActionCreators(setBrowserWidth, dispatch),
    setScrollPositionY: bindActionCreators(setScrollPositionY, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Page);
