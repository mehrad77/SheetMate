import React, { FC } from 'react';
import classNames from 'classnames';
import { Box } from '../../../components';
import { ICharacter } from '../../../datatypes';

interface ICharacterProps extends ICharacter {}

const Character: FC<ICharacterProps> = ({
  name,
  alignment,
  level,
  xp,
  age,
  sex,
  height,
  weight,
  size,
  inspiration,
  movementSpeed,
  racialAbilities,
  languages
}) => {
  const classes = classNames({
    'p-2 flex flex-col md:flex-row bg-yellow-500 w-full shadow-xl': true
  });

  return (
    <div className={` ${classes}`}>
      <div className="md:w-1/4">
        <img className="w-48 p-4" src="/bard.png" alt="class icon" />
      </div>
      <div className="flex flex-col md:w-3/4">
        <div className="align-baseline flex justify-between  text-left">
          <h1 className="inline pr-2">{name}</h1>
          <div>
            <div className="inline-flex flex-col justify-center items-center px-2 mx-2 bg-orange-800 text-white shadow">
              <span className="text-2xl">{alignment}</span>
              <span className="text-sm">Alignment</span>
            </div>
            <div className="inline-flex flex-col justify-center items-center px-2 mx-2 bg-orange-800 text-white shadow">
              <span className="text-2xl">{movementSpeed}</span>
              <span className="text-sm">Speed</span>
            </div>
            <div className="inline-flex flex-col justify-center items-center px-2 mx-2 bg-orange-800 text-white shadow">
              <span className="text-2xl">{level}</span>
              <span className="text-sm">Level</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          {xp && <Box title="XP">{xp}</Box>}
          {sex} &bull; {height}cm &bull; {weight}km &bull; {size} creature
        </div>
        <div className="flex flex-row">
          <Box title="inspiration">{inspiration}</Box>
          <Box title="racialAbilities">{racialAbilities}</Box>
        </div>
        <div className="flex flex-row">
          {Object.keys(languages)?.map(language => (
            <span key={language}> {language} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
