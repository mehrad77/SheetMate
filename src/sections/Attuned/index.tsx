import React, { FC } from 'react';
import classNames from 'classnames';

interface IAttuned {}

const Attuned: FC<IAttuned> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Attuned;
