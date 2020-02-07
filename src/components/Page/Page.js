import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import './Page.scss';
import windowListener from '../../helpers/window-listener';
import { setBrowserHeight, setBrowserWidth, setScrollPositionY } from '../../actions/page';
import Header from '../Header';


import PageHome from '../PageHome';



class Page extends Component{
  state = {
    contentPositionY: 0
  };

  componentDidMount() {
    // this.props.fetchData();
    windowListener.registerResizeCallback('onPageResize', this.onResize);
    this.setBrowserSizes();
  }

  onWheel = (e) => {
    this.props.setScrollPositionY(e.deltaY());
  };

  onResize = () => {
    this.setBrowserSizes();
  };

  setBrowserSizes = () => {
    const { setBrowserHeight, setBrowserWidth } = this.props;

    setBrowserHeight(window.innerHeight);
    setBrowserWidth(window.innerWidth);
  };


  render() {
    return (
      <Router>
        <div className='page' onWheel={this.onWheel} ref={this.page}>
          <div className='page__contenе-wrapper'>
            <div className='page__content' ref={this.content}>
              <div className='page__header'>
                <Header />
              </div>

              <main className='page__main'>
                <Switch>
                  <Route path={'/'} component={PageHome} exact />
                </Switch>
              </main>
            </div>
          </div>
        </div>
      </Router>
    );  
  }
}

Page.propTypes = {
  lang: PropTypes.string,
  setBrowserWidth: PropTypes.func,
  setScrollPositionY: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    lang: state.locale.lang
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBrowserHeight: bindActionCreators(setBrowserHeight, dispatch),
    setBrowserWidth: bindActionCreators(setBrowserWidth, dispatch),
    setScrollPositionY: bindActionCreators(setScrollPositionY, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
