import React, { FC } from 'react';
import classNames from 'classnames';
import { IVitals } from '../../../datatypes';

interface IVitalsProps extends IVitals {}

const Vitals: FC<IVitalsProps> = ({ maxHP, currentHP, tempHP, hitDice, deathSaves, things }) => {
  const classes = classNames({
    'p-2 flex flex-row bg-yellow-700 w-full': true
  });

  return <div className={`${classes}`}></div>;
};

export default Vitals;
