import React, { FC } from 'react';
import { IAbility, ISkils, ISkill } from '../../../datatypes/ISkils';

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

        let skillModifier = abilityModifier;
        if (skill.proficiency === 'none') {
        } else if (skill.proficiency === 'half-proficient') {
          skillModifier = skillModifier + parseInt(String(proficiencyBonus / 2));
        } else if (skill.proficiency === 'proficient') {
          skillModifier = skillModifier + proficiencyBonus;
        } else if (skill.proficiency === 'expert') {
          skillModifier = skillModifier + proficiencyBonus * 2;
        }
        const sign =
          Math.sign(skillModifier) === 1 ? '+' : Math.sign(skillModifier) === 0 ? '' : '-';

        return (
          <div className="w-full sm:w-1/3 md:w-1/4">
            <div className="flex justify-between items-baseline p-1 m-1 md:px-2 lg:px-4 bg-orange-600 text-gray-900 capitalize shadow-md">
              <span className=" text-lg"> {skillName} </span>
              <span className="text-2xl bg-orange-400 flex items-center justify-center rounded-full leading-none w-10 h-10 shadow">
                {sign} {skillModifier}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkillsPoints;
