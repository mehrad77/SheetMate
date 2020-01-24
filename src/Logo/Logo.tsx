import React from 'react';

import logoImage from './logo.svg';

const logo = (props: any) => (
  <div onClick={props.clicked}>
    <img src={logoImage} alt="React Logo" />
  </div>
);

export default logo;
