import React, { createRef, forwardRef,useEffect, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

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

// const withSideChain = WrappedComponent => {
//   const wrapper  = (props) => {
//     const { 
//       children,
//       pageHeight,
//       scrollY,
//       viewportHeight,
//       viewportWidth
//     } = props.page;

//     const [sectionPosition, setSectionPosition] = useState({});
//     const ref = createRef();

//     useEffect(() => {
//       setPositions();
//     }, []);

//     useEffect(() => {
//       setPositions();
//     }, [viewportHeight, viewportWidth]);

//     const setPositions = () => {
//       const sectionHeight = ref.current.offsetHeight;
//       const start = ref.current.getBoundingClientRect().top + scrollY;
//       const end = start + sectionHeight;

//       setSectionPosition({
//         end,
//         start,
//       });
//     };

//     const viewportMoveY = getSideChainScrollY({
//       sectionPosition,
//       pageHeight,
//       viewportHeight,
//       scrollY,
//     });

//     const sideChains = {
//       viewportMoveY
//     };

//     return (
//       <WrappedComponent
//         {...props}
//         sideChains={sideChains}
//         ref={ref}
//       >
//         {/* {children} */}
//       </WrappedComponent>
//     );
//   };

//   wrapper.propTypes = {
//     pageHeight: PropTypes.number,
//     pageWidth: PropTypes.number,
//     scrollY: PropTypes.number,
//     viewportHeight: PropTypes.number,
//     viewportWidth: PropTypes.number,
//   };

//   const mapStateToProps = (state) => ({
//     page: state.page,
//   });

//   return connect(mapStateToProps, null)(wrapper);
// };

// // withSideChain.propTypes = {
// //   Component: PropTypes.element,
// // };


// // export default connect(mapStateToProps, null)(withSideChain);
// export default withSideChain;

const withSideChain = Component => (props) => {
  const { children, page } = props;

  const { 
    pageHeight,
    scrollY,
    viewportHeight,
    viewportWidth
  } = page;

  const [sectionPosition, setSectionPosition] = useState({});
  const ref = createRef();

  console.log('ref', ref);

  // useEffect(() => {
  //   setPositions();
  // }, []);

  // useEffect(() => {
  //   setPositions();
  // }, [viewportHeight, viewportWidth]);

  // const setPositions = () => {
  //   const sectionHeight = ref.current.offsetHeight;
  //   const start = ref.current.getBoundingClientRect().top + scrollY;
  //   const end = start + sectionHeight;

  //   setSectionPosition({
  //     end,
  //     start,
  //   });
  // };

  // const viewportMoveY = getSideChainScrollY({
  //   sectionPosition,
  //   pageHeight,
  //   viewportHeight,
  //   scrollY,
  // });

  // const sideChains = {
  //   viewportMoveY
  // };

  // return forwardRef((props, ref) => (
  //   <Component
  //     forwardRef={ref}
  //     sideChains={'test'}
  //   />
  // ));

  return (
    <Component
      ref={ref}
      sideChains={'test'}
    />
  );
};

const mapStateToProps = (state) => ({
  page: state.page,
});

const composed = compose(
  connect(mapStateToProps, null), 
  withSideChain
);

export default composed;


