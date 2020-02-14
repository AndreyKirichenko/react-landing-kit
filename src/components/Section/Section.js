import React, { createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Section.scss';

const getSideChainScrollY = ({
  sectionPosition,
  pageHeight,
  viewportHeight,
  scrollY,
}) => {
  let start = sectionPosition.start - viewportHeight;

  if(start < 0) {
    start = 0;
  }

  let end = sectionPosition.end;
  const minPossibleEnd = pageHeight - viewportHeight;

  if(end > minPossibleEnd) {
    end = minPossibleEnd;
  }

  const delta = end - start;
  const relativeScrollY = scrollY - start;
  const ratio = relativeScrollY / delta * 2 - 1;

  return ratio;
};

const Section = ({ pageHeight, pageWidth, scrollY, viewportHeight, viewportWidth }) => {
  const [sectionPosition, setSectionPosition] = useState({});
  const ref = createRef();

  useEffect(() => {
    setPositions();
  }, []);

  useEffect(() => {
    setPositions();
  }, [viewportHeight, viewportWidth]);

  const setPositions = () => {
    const sectionHeight = ref.current.offsetHeight;
    const start = ref.current.getBoundingClientRect().top + scrollY;
    const end = start + sectionHeight;

    setSectionPosition({
      end,
      start,
    });
  };

  const ratio = getSideChainScrollY({
    sectionPosition,
    pageHeight,
    viewportHeight,
    scrollY,
  });

  return (
    <section
      className='section'
      ref={ref}
    >
      <div>{`pageHeight - ${pageHeight}`}</div>
      <div>{`pageWidth - ${pageWidth}`}</div>
      <div>{`viewportHeight - ${viewportHeight}`}</div>
      <div>{`viewportWidth - ${viewportWidth}`}</div>
      <div>{`sectionPosition.start - ${sectionPosition.start}`}</div>
      <div>{`sectionPosition.end - ${sectionPosition.end}`}</div>
      <div>{`scrollY - ${scrollY}`}</div>
      <div>{`ratio - ${ratio}`}</div>
    </section>
  );
};

Section.propTypes = {
  pageHeight: PropTypes.number,
  pageWidth: PropTypes.number,
  scrollY: PropTypes.number,
  viewportHeight: PropTypes.number,
  viewportWidth: PropTypes.number,
};

const mapStateToProps = (state) => ({
  pageHeight: state.page.height,
  pageWidth: state.page.width,
  scrollY: state.page.scrollY,
  viewportHeight: state.page.viewportHeight,
  viewportWidth: state.page.viewportWidth,
});

export default connect(mapStateToProps, null)(Section);
