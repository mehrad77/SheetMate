import React, { FC } from 'react';
import classNames from 'classnames';

interface IEquipment {}

const Equipment: FC<IEquipment> = ({ children }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Equipment;
