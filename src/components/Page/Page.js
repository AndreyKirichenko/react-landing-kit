import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './Page.scss';
import windowListener from '../../helpers/window-listener';

import {
  setPageHeight,
  setPageWidth,
  setViewportHeight,
  setViewportWidth,
  setScrollPositionY,
} from '../../actions/page';

import { setMobileMenuOpened } from '../../actions/mobileMenu';

import Header from '../Header';
import Section from '../Section';

const Page = ({
  setPageHeight,
  setPageWidth,
  setViewportHeight,
  setViewportWidth,
  setScrollPositionY,
  setMobileMenuOpened,
}) => {
  useEffect(() => {
    windowListener.registerResizeCallback('onPageResize', onResize);
    windowListener.registerScrollCallback('onPageScroll', onScroll);
    setSizes();

    return () => {
      windowListener.unregisterResizeCallback('onPageResize');
      windowListener.unregisterScrollCallback('onPageScroll');
    };
  });

  const setSizes = () => {
    setPageHeight(document.body.clientHeight);
    setPageWidth(document.body.clientWidth);
    setViewportHeight(window.innerHeight);
    setViewportWidth(window.innerWidth);
  };

  const onScroll = () => {
    setScrollPositionY(window.scrollY);
  };

  const onResize = () => {
    setMobileMenuOpened(false);
    setSizes();
  };

  return (
    <Router>
      <div className='page'>
        <div className='page__header'>
          <Header />
        </div>

        <main className='page__main'>
          <Section />
          <Section />
          <Section />
        </main>
      </div>
    </Router>
  );
};

Page.propTypes = {
  setPageHeight: PropTypes.func,
  setPageWidth: PropTypes.func,
  setViewportHeigh: PropTypes.func,
  setViewportWidth: PropTypes.func,
  setScrollPositionY: PropTypes.func,
  setMobileMenuOpened: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageHeight: bindActionCreators(setPageHeight, dispatch),
    setPageWidth: bindActionCreators(setPageWidth, dispatch),
    setViewportHeight: bindActionCreators(setViewportHeight, dispatch),
    setViewportWidth: bindActionCreators(setViewportWidth, dispatch),
    setScrollPositionY: bindActionCreators(setScrollPositionY, dispatch),
    setMobileMenuOpened: bindActionCreators(setMobileMenuOpened, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Page);
