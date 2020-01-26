import React, { FC } from 'react';
import { IAbility, ISkils, ISkill } from '../../../datatypes/ISkils';
import SingleSkill from './SingleSkill';

interface ISkillsPointsProps {
  abilities: ISkils['abilities'];
  skills: ISkils['skills'];
  proficiencyBonus?: number;
}

const SkillsPoints: FC<ISkillsPointsProps> = ({ abilities, skills, proficiencyBonus = 2 }) => {
  return (
    <>
      {Object.keys(skills)?.map(skillName => {
        // @ts-ignore
        const skill: ISkill = skills[skillName];
        // @ts-ignore
        const ability: IAbility = abilities[skill.parent];
        const abilityScore = ability.baseNum + ability.addedNum;
        const abilityModifier = parseInt(String((abilityScore - 10) / 2));

        let borderClass = 'border-gray-900';
        let skillModifier = abilityModifier;
        if (skill.proficiency === 'none') {
          borderClass = 'border-none';
        } else if (skill.proficiency === 'half-proficient') {
          borderClass = borderClass + ' border-dotted border-2';
          skillModifier = skillModifier + parseInt(String(proficiencyBonus / 2));
        } else if (skill.proficiency === 'proficient') {
          borderClass = borderClass + ' border-solid border-2';
          skillModifier = skillModifier + proficiencyBonus;
        } else if (skill.proficiency === 'expert') {
          borderClass = borderClass + ' border-solid border-4';
          skillModifier = skillModifier + proficiencyBonus * 2;
        }
        const sign =
          Math.sign(skillModifier) === 1 ? '+' : Math.sign(skillModifier) === 0 ? '' : '-';

        return (
          <SingleSkill
            sign={sign}
            skillName={skillName}
            skillModifier={skillModifier}
            borderClass={borderClass}
          />
        );
      })}
    </>
  );
};

export default SkillsPoints;
