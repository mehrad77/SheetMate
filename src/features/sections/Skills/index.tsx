import React, { FC } from 'react';
import classNames from 'classnames';
import { Section } from '../../../components';
import { ISkils } from '../../../datatypes';
import Abilty from './Abiliy';

interface ISkillsProps extends ISkils {}

const Skills: FC<ISkillsProps> = ({ abilities, skills, proficiencyBonus, passivePerception }) => {
  const classes = classNames({
    SkillsSection: true,
    'bg-red-700': true
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
        className="bg-red-700 text-white"
      >
        Skills
      </span>
      <div className="flex flex-row w-full">
        {Object.keys(abilities)?.map(abiltyName => (
          // @ts-ignore
          <Abilty title={abiltyName} abilty={abilities[abiltyName]} />
        ))}

        <div className=""></div>
      </div>
    </Section>
  );
};

export default Skills;
