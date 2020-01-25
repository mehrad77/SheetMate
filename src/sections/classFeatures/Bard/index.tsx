import React, { FC } from 'react';
import classNames from 'classnames';

interface IBardCF {}

const BardCF: FC<IBardCF> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default BardCF;
