import React, { FC } from 'react';
import classNames from 'classnames';

interface ICharacter {}

const Character: FC<ICharacter> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Character;
