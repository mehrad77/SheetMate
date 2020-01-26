import React, { FC } from 'react';

interface ISingleSkillProps {
  skillName: string;
  borderClass: string;
  sign: string;
  skillModifier: number;
}

const SingleSkill: FC<ISingleSkillProps> = ({ skillName, borderClass, sign, skillModifier }) => {
  return (
    <div className="w-full sm:w-1/3 md:w-1/4">
      <div
        className="flex justify-between items-baseline p-1 m-1 md:px-2 lg:px-4
            bg-orange-600 text-gray-900 capitalize shadow-md"
      >
        <div className="w-3/4 text-left">
          <span> {skillName.replace(/([A-Z])/g, ' $1').trim()} </span>
        </div>
        <div className="w-1/4">
          <span
            className={`text-2xl bg-orange-400 flex items-center
                justify-center rounded-full leading-none w-10 h-10 shadow ${borderClass}`}
          >
            {sign}
            {skillModifier}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleSkill;
