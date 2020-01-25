import React, { FC } from 'react';
import classNames from 'classnames';

interface ISpells {}

const Spells: FC<ISpells> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Spells;
