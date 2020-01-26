import React, { FC } from 'react';

interface IConditionsProps {
  conditions: object;
}

const Conditions: FC<IConditionsProps> = ({ conditions }) => {
  return (
    <>
      <strong>Conditions</strong>
      <ul className="text-left" style={{ columns: 2 }}>
        {Object.keys(conditions)?.map(thing => {
          // @ts-ignore
          return <>{conditions[thing] === true && <li>{thing}</li>}</>;
        })}
      </ul>
    </>
  );
};

export default Conditions;
