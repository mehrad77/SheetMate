import React, { FC } from 'react';
import classNames from 'classnames';
import { Section, CircleIndicator, BorderdBox } from '../../../components';
import { IMoney } from '../../../datatypes';

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
          marginTop: '7px',
          padding: '0px 5px'
        }}
        className="bg-orange-700 text-white"
      >
        Money
      </span>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-row md:flex-col-reverse flex-wrap m-2 p-2 items-baseline justify-center">
          <CircleIndicator title="CP" value={CP} className="m-2 md:m-0 md:-mt-2" />
          <CircleIndicator title="SP" value={SP} className="m-2 md:m-0 md:-mt-2" />
          <CircleIndicator title="EP" value={EP} className="m-2 md:m-0 md:-mt-2" />
          <CircleIndicator title="GP" value={GP} className="m-2 md:m-0 md:-mt-2" />
          <CircleIndicator title="PP" value={PP} className="m-2 md:m-0 md:-mt-2" />
        </div>
        <div className="flex flex-col w-full h-full">
          <BorderdBox
            title="Treasures"
            className="text-orange-200 border-orange-200 text-left h-full"
          >
            {treasures ? treasures : '...'}
          </BorderdBox>
        </div>
      </div>
    </Section>
  );
};

export default Money;
