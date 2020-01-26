import React, { FC } from 'react';
import classNames from 'classnames';
import { ICharacterSheet } from '../../datatypes';
import {
  Character,
  Vitals,
  Gears,
  Skills,
  Money,
  Equipment,
  Attuned,
  Feats,
  Background,
  Cantrips,
  Spells
} from '../sections';

interface ISheet {
  character?: ICharacterSheet;
}

const Sheet: FC<ISheet> = ({ character }) => {
  const classes = classNames({
    'w-full': true
  });
  if (!character) {
    return <h1>You'r character is not defined.</h1>;
  }
  return (
    <div className={`${classes}`}>
      <Character {...character.character} />
      {/* <ClassFeature /> */}
      <Vitals {...character.vitals} />
      <Gears {...character.gears} />
      <Skills {...character.skills} />
      <Money {...character.money} />
      <Equipment />
      <Attuned />
      <Feats />
      <Background {...character.background} />
      <Cantrips />
      <Spells />
    </div>
  );
};

export default Sheet;
