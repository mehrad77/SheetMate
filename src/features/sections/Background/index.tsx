import React, { FC } from 'react';
import classNames from 'classnames';

interface IBackground {}

const Background: FC<IBackground> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Background;
