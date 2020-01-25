import React, { FC } from 'react';

interface IDeathSavesProps {
  deathSaves?: object;
}

const DeathSaves: FC<IDeathSavesProps> = ({ deathSaves }) => {
  return (
    <div className="bg-yellow-500 -mt-2 flex flex-col justify-center shadow-sm rounded-sm">
      <span className="text-sm">Death Saves</span>
      <div className="flex items-center">
        <span className="text-xl px-1">◌</span>
        <span className="text-lg pr-1">◌</span>
        <span className="text-sm pr-1">◌</span>
        <span>|</span>
        <span className="text-sm pl-1">◌</span>
        <span className="text-lg pl-1">◌</span>
        <span className="text-xl px-1">◌</span>
      </div>
    </div>
  );
};

export default DeathSaves;
