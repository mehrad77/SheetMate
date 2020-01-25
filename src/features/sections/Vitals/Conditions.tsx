import React, { FC } from 'react';

interface IConditionsProps {
  conditions: object;
}

const Conditions: FC<IConditionsProps> = ({ conditions }) => {
  return (
    <div className="md:w-2/6 capitalize flex flex-col items-center">
      <strong>Conditions</strong>
      <ul className="text-left" style={{ columns: 2 }}>
        {Object.keys(conditions)?.map(thing => {
          // @ts-ignore
          return <>{conditions[thing] === true && <li>{thing}</li>}</>;
        })}
      </ul>
    </div>
  );
};

export default Conditions;
