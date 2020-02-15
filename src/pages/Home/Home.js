import React from 'react';
import PropTypes from 'prop-types';

import withSideChain from '../../components/withSideChain';

// const PageHome = ({ sideChains }) => {
//   console.log(sideChains);
//   return (
//     <div>
//       Page Home is here!
//       {/* <br />
//       sideChain.viewportMoveY is {sideChain.viewportMoveY} */}
//     </div>
//   );
// };

const PageHome = React.forwardRef(({ sideChains }, ref) => {
  console.log(sideChains);
  return (
    <div ref={ref}>
      Page Home is here!
      {/* <br />
      sideChain.viewportMoveY is {sideChain.viewportMoveY} */}
    </div>
  );
});

PageHome.propTypes = {
  sideChain: PropTypes.object,
};

// export default PageHome;
export default withSideChain(PageHome);
