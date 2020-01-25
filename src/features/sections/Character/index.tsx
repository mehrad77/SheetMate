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
    'p-2 flex flex-row bg-yellow-300 w-full': true
  });

  return (
    <div className={` ${classes}`}>
      <div className=" w-1/4">
        <img className="w-48 p-4" src="/bard.png" alt="class icon" />
      </div>
      <div className="flex flex-col w-3/4">
        <div className="flex flex-row">
          <h1>{name}</h1>
        </div>
        <div className="flex flex-row">
          <Box title="Alignment">{alignment}</Box>
          {xp && <Box title="XP">{xp}</Box>}
          <Box title="Level">{level}</Box>
          <Box title="Sex">{sex}</Box>
          <Box title="height">{height}</Box>
          <Box title="weight">{weight}</Box>
          <Box title="size">{size}</Box>
        </div>
        <div className="flex flex-row">
          <Box title="inspiration">{inspiration}</Box>
          <Box title="movementSpeed">{movementSpeed}</Box>
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
