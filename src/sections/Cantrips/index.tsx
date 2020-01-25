import React, { FC } from 'react';
import classNames from 'classnames';

interface ICantrips {}

const Cantrips: FC<ICantrips> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Cantrips;
