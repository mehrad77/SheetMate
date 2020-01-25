import React, { FC } from 'react';
import classNames from 'classnames';

interface IGear {}

const Gear: FC<IGear> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Gear;
