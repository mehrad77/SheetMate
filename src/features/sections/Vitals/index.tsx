import React, { FC } from 'react';
import classNames from 'classnames';
import { IVitals } from '../../../datatypes';
import { Section, LevelBox } from '../../../components';
import DeathSaves from './DeathSaves';
import HitPoint from './CurrentHP';
import TempHP from './TempHP';
import Conditions from './Conditions';

interface IVitalsProps extends IVitals {}

const Vitals: FC<IVitalsProps> = ({ maxHP, currentHP, tempHP, hitDice, deathSaves, things }) => {
  const classes = classNames({
    VitalsSection: true,
    'bg-orange-600': true
  });

  return (
    <Section className={classes}>
      <span
        style={{
          rotate: '270deg',
          position: 'absolute',
          marginLeft: '-43px',
          marginTop: '4px',
          padding: '0px 5px'
        }}
        className="bg-orange-600"
      >
        Vitals
      </span>
      <div className="flex flex-col-reverse sm:flex-row w-full">
        <div className="w-full sm:w-2/6 capitalize flex flex-col items-center">
          <Conditions conditions={things} />
        </div>
        <div className="w-full sm:w-2/6 flex flex-col py-2 justify-center items-center">
          <DeathSaves deathSaves={deathSaves} />
          <HitPoint maxHP={maxHP} currentHP={currentHP} />
          <TempHP tempHP={tempHP} />
        </div>
        <div className="w-full mb-4 sm:mb-0 sm:w-2/6 flex justify-center sm:justify-end">
          <div>
            <LevelBox title="HitDice" value={hitDice} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Vitals;
