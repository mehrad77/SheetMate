import React, { FC } from 'react';
import classNames from 'classnames';

interface ISkills {}

const Skills: FC<ISkills> = ({ children }) => {
  const classes = classNames({});
  return <div className={`${classes}`}>{children}</div>;
};

export default Skills;
