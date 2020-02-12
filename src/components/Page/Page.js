import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './Page.scss';
import windowListener from '../../helpers/window-listener';

import {
  setDocumentHeight,
  setDocumentWidth,
  setViewportHeight,
  setViewportWidth,
  setScrollPositionY,
  setMobileMenuOpened,
} from '../../actions/page';

import Header from '../Header';
import Section from '../Section';

const Page = ({
  setDocumentHeight,
  setDocumentWidth,
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
    setDocumentHeight(document.documentElement.clientHeight);
    setDocumentWidth(document.documentElement.clientWidth);
    setViewportHeight(window.innerHeight);
    setViewportWidth(window.innerWidth);
    setMobileMenuOpened(false);
  };

  const onScroll = () => {
    setScrollPositionY(window.scrollY);
  };

  const onResize = () => {
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
  setDocumentHeight: PropTypes.func,
  setDocumentWidth: PropTypes.func,
  setViewportHeigh: PropTypes.func,
  setViewportWidth: PropTypes.func,
  setScrollPositionY: PropTypes.func,
  setMobileMenuOpened: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDocumentHeight: bindActionCreators(setDocumentHeight, dispatch),
    setDocumentWidth: bindActionCreators(setDocumentWidth, dispatch),
    setViewportHeight: bindActionCreators(setViewportHeight, dispatch),
    setViewportWidth: bindActionCreators(setViewportWidth, dispatch),
    setScrollPositionY: bindActionCreators(setScrollPositionY, dispatch),
    setMobileMenuOpened: bindActionCreators(setMobileMenuOpened, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Page);
