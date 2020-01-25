import React, { FC } from 'react';
import classNames from 'classnames';

interface IMoney {}

const Money: FC<IMoney> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Money;
