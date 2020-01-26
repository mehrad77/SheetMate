import React, { FC } from 'react';
import classNames from 'classnames';
import { Section } from '../../../components';
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
        <h3 className="mb-2">{backgroundName}</h3>
        <div className="flex flex-row flex-wrap w-full">
          <div className="md:w-3/6">
            <p className="border-2 border-dashed border-yellow-800 p-2 m-2">
              <strong className="text-lg">Trait</strong>
              <br />
              {trait}
            </p>
          </div>
          <div className="md:w-3/6">
            <p className="border-2 border-dashed border-yellow-800 p-2 m-2">
              <strong className="text-lg">Bond</strong>
              <br />
              {bond}
            </p>
          </div>
          <div className="md:w-3/6">
            <p className="border-2 border-dashed border-yellow-800 p-2 m-2">
              <strong className="text-lg">Ideal</strong>
              <br />
              {ideal}
            </p>
          </div>
          <div className="md:w-3/6">
            <p className="border-2 border-dashed border-yellow-800 p-2 m-2">
              <strong className="text-lg">Flaw</strong>
              <br />
              {flaw}
            </p>
          </div>
        </div>
        <h3 className="mb-2">Organisations</h3>
        <div className="flex flex-row flex-wrap w-full">
          <div className="sm:w-2/5">
            <p className="border-2 border-dashed border-yellow-800 p-2 m-2">
              <strong className="text-lg">Allies</strong>
              <br />
              {organisations.allies}
            </p>
          </div>
          <div className="sm:w-2/5">
            <p className="border-2 border-dashed border-yellow-800 p-2 m-2">
              <strong className="text-lg">Enemies</strong>
              <br />
              {organisations.enemies}
            </p>
          </div>
          <div className="sm:w-1/5">
            <p className="border-2 border-dashed border-yellow-800 p-2 m-2">
              <strong className="text-lg">Faction</strong>
              <br />
              {faction}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Background;
