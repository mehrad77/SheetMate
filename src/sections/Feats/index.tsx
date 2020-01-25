import React, { FC } from 'react';
import classNames from 'classnames';

interface IFeats {}

const Feats: FC<IFeats> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Feats;
