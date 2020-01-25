import React, { FC } from 'react';
import classNames from 'classnames';

interface IVitals {}

const Vitals: FC<IVitals> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Vitals;
