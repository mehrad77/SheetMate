import React, { FC } from 'react';
import classNames from 'classnames';
import { IVitals } from '../../../datatypes';
import { Section, LevelBox } from '../../../components';

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
      <div className="flex flex-row w-full">
        <div className="md:w-1/4"></div>
        <div className="md:w-2/4 flex flex-col py-2 justify-center items-center">
          <div className="bg-yellow-500 -mt-2 flex flex-col justify-center shadow-sm rounded-sm">
            <span className="text-sm">Death Saves</span>
            <div className="flex items-center">
              <span className="text-xl px-1">◌</span>
              <span className="text-lg pr-1">◌</span>
              <span className="text-sm pr-1">◌</span>
              <span>|</span>
              <span className="text-sm pl-1">◌</span>
              <span className="text-lg pl-1">◌</span>
              <span className="text-xl px-1">◌</span>
            </div>
          </div>
          <div className="bg-yellow-400 px-8 py-3 z-10 flex items-baseline shadow-md rounded-sm">
            <span className="text-6xl" style={{ display: 'contents' }}>
              {currentHP}
            </span>
            <span className="text-3xl">/{maxHP}</span>
          </div>
          <div className="bg-yellow-500 px-4 pt-2 -mt-2 flex flex-col justify-center shadow-sm rounded-sm">
            <span className="text-xl" style={{ display: 'contents' }}>
              {tempHP}
            </span>
            <span className="text-sm">Temp</span>
          </div>
        </div>
        <div className="md:w-1/4 flex justify-end">
          <div>
            <LevelBox title="HitDice" value={hitDice} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Vitals;
