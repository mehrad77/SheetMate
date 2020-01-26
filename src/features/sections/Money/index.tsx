import React, { FC } from 'react';
import classNames from 'classnames';
import { Section } from '../../../components';
import { IMoney } from '../../../datatypes';
import SingleCurrecy from './SingleCurrency';

interface IMoneyProps extends IMoney {}

const Money: FC<IMoneyProps> = ({ CP, SP, EP, GP, PP, treasures }) => {
  const classes = classNames({
    SkillsSection: true,
    'bg-orange-700': true
  });
  return (
    <Section className={classes}>
      <span
        style={{
          rotate: '270deg',
          position: 'absolute',
          marginLeft: '-43px',
          marginTop: '4x',
          padding: '0px 5px'
        }}
        className="bg-orange-700 text-white"
      >
        Money
      </span>
      <div className="flex flex-row w-full">
        <div className="flex flex-col-reverse m-2 p-2 items-baseline">
          <SingleCurrecy title="CP" value={CP} />
          <SingleCurrecy title="SP" value={SP} />
          <SingleCurrecy title="EP" value={EP} />
          <SingleCurrecy title="GP" value={GP} />
          <SingleCurrecy title="PP" value={PP} />
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="text-orange-200 text-left px-4 border-4 border-orange-400 border-dashed w-full h-full">
            <h3 className="font-semibold text-2xl pt-2">Treasures</h3>
            <p className="">{treasures ? treasures : '...'}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Money;
