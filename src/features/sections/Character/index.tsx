import React, { FC } from 'react';
import classNames from 'classnames';
import { Box, LevelBox } from '../../../components';
import { ICharacter } from '../../../datatypes';
import Language from './Language';

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
        <div className="align-baseline flex justify-between text-left">
          <h1 className="inline pr-2">{name}</h1>
          <div>
            <LevelBox title="Alignment" value={alignment} />
            <LevelBox title="Speed" value={movementSpeed} />
            <LevelBox title="Level" value={level} />
          </div>
        </div>
        <div className="flex flex-row capitalize justify-between my-2">
          {/* {xp && <Box title="XP">{xp}</Box>} */}
          <div>
            {sex} &bull; {size} creature &bull; {height}cm &bull; {weight}km
          </div>
          <div>
            <input className="mr-2 leading-tight" type="checkbox" checked={inspiration} />
            <span className="text-sm">Inspiration</span>
          </div>
        </div>
        <div className="flex flex-row capitalize">
          <Language languages={languages} />
        </div>
        {racialAbilities && (
          <div>
            <p>{racialAbilities}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Character;
