import React, { FC } from 'react';
import classNames from 'classnames';
import { Section } from '../../../components';
import { ISkils } from '../../../datatypes';
import Abilty from './Abiliy';
import SkillsPoints from './SkillsPoints';

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
      <div className="flex flex-col w-full">
        <div className="flex flex-row flex-wrap">
          {Object.keys(abilities)?.map(abiltyName => (
            // @ts-ignore
            <Abilty title={abiltyName} abilty={abilities[abiltyName]} />
          ))}
        </div>
        <div className="flex xs:flex-col sm:flex-row flex-wrap pt-2">
          <SkillsPoints abilities={abilities} skills={skills} proficiencyBonus={proficiencyBonus} />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
