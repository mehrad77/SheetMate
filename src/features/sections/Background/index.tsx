import React, { FC } from 'react';
import classNames from 'classnames';
import { Section, BorderdBox, SectionTitle } from '../../../components';
import { IBackground } from '../../../datatypes';

interface IBackgroundProps extends IBackground {}

const Background: FC<IBackgroundProps> = ({
  backgroundName,
  trait,
  bond,
  ideal,
  flaw,
  organisations,
  faction
}) => {
  const classes = classNames({
    CharacterSection: true,
    'bg-yellow-500': true
  });

  return (
    <Section className={classes}>
      <span
        style={{
          rotate: '270deg',
          position: 'absolute',
          marginLeft: '-60px',
          marginTop: '25px',
          padding: '0px 5px'
        }}
        className="bg-yellow-500"
      >
        Background
      </span>
      <div className="flex flex-col w-full text-left p-2">
        <SectionTitle title={backgroundName} />
        <div className="flex flex-row flex-wrap w-full">
          <div className="md:w-3/6 lg:w-3/12">
            <BorderdBox className="border-yellow-800" title="Trait">
              {trait}
            </BorderdBox>
          </div>
          <div className="md:w-3/6 lg:w-3/12">
            <BorderdBox className="border-yellow-800" title="Bond">
              {bond}
            </BorderdBox>
          </div>
          <div className="md:w-3/6 lg:w-3/12">
            <BorderdBox className="border-yellow-800" title="Ideal">
              {ideal}
            </BorderdBox>
          </div>
          <div className="md:w-3/6 lg:w-3/12">
            <BorderdBox className="border-yellow-800" title="Flaw">
              {flaw}
            </BorderdBox>
          </div>
        </div>
        <SectionTitle title="Organisations" />
        <div className="flex flex-row flex-wrap w-full">
          <div className="sm:w-2/5">
            <BorderdBox className="border-yellow-800" title="Allies">
              {organisations.allies.join(', ')}
            </BorderdBox>
          </div>
          <div className="sm:w-2/5">
            <BorderdBox className="border-yellow-800" title="Enemies">
              {organisations.enemies}
            </BorderdBox>
          </div>
          <div className="sm:w-1/5">
            <BorderdBox className="border-yellow-800" title="Faction">
              {faction}
            </BorderdBox>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Background;
