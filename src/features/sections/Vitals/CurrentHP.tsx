import React, { FC } from 'react';

interface IHitPointProps {
  maxHP: string | number;
  currentHP: string | number;
}

const HitPoint: FC<IHitPointProps> = ({ currentHP, maxHP }) => {
  return (
    <div className="bg-yellow-400 px-8 py-3 -mt-1 z-10 flex items-baseline shadow-lg rounded-sm">
      <span className="text-6xl" style={{ display: 'contents' }}>
        {currentHP}
      </span>
      <span className="text-3xl">/{maxHP}</span>
    </div>
  );
};

export default HitPoint;
