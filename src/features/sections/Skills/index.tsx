import React, { FC } from 'react';
import classNames from 'classnames';
import { Section } from '../../../components';
import { ISkils } from '../../../datatypes';

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
    </Section>
  );
};

export default Skills;
