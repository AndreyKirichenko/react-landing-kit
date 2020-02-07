import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HeaderLogo.scss';
import LetterWrapper from '../LetterWrapper';

const TEXT = 'logo';

class HeaderLogo extends Component {

  render() {
    return (
      <Link className='header-logo header-logo--with-animated-letters' to='/'>
        <LetterWrapper className='header-logo__letter' text={TEXT}/>
      </Link>
    );
  }
}

export default HeaderLogo;
