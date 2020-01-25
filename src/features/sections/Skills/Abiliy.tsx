import React, { FC } from 'react';
import { IAbility } from '../../../datatypes/ISkils';

interface IAbiltyProps {
  title: string;
  abilty: IAbility;
}

const Abilty: FC<IAbiltyProps> = ({ title, abilty }) => {
  const score = abilty.baseNum + abilty.addedNum;
  const modifier = parseInt(String((score - 10) / 2));
  const sign = Math.sign(modifier) === 1 ? '+' : Math.sign(modifier) === 0 ? '' : '-';
  return (
    <div className="w-1/6 flex flex-col items-center">
      <div className="flex flex-col bg-orange-500 w-16 p-1 rounded-b-full py-2 z-10 justify-between shadow-lg">
        <span className="text-xl leading-none">{title}</span>
        <span className="text-4xl leading-none">
          <span className="text-xl">{sign}</span>
          {modifier}
        </span>
      </div>
      <div className="bg-orange-600 w-8 p-1 -mt-2 shadow-lg rounded-b-full">
        <span className="text-lg">{score}</span>
      </div>
    </div>
  );
};

export default Abilty;
