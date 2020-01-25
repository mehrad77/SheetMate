import React, { FC } from 'react';
import classNames from 'classnames';
import { ICharacterSheet } from '../../datatypes';
import {
  Character,
  Vitals,
  Gear,
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
      <Vitals />
      <Gear />
      <Skills />
      <Money />
      <Equipment />
      <Attuned />
      <Feats />
      <Background />
      <Cantrips />
      <Spells />
    </div>
  );
};

export default Sheet;
