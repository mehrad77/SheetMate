import React, { FC } from 'react';

interface ITempHPProps {
  tempHP: string | number;
}

const TempHP: FC<ITempHPProps> = ({ tempHP }) => {
  return (
    <div className="bg-yellow-500 px-4 pt-2 -mt-2 flex flex-col justify-center shadow-sm rounded-sm">
      <span className="text-xl" style={{ display: 'contents' }}>
        {tempHP}
      </span>
      <span className="text-sm">Temp</span>
    </div>
  );
};

export default TempHP;
