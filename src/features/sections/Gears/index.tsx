import React, { FC } from 'react';
import classNames from 'classnames';
import { weapons as AllWeapons } from '../../../data/weapons';
import { Section } from '../../../components';
import { IGears } from '../../../datatypes/IGears';
import { IWeapon } from '../../../datatypes';

interface IGearsProps extends IGears {}

const Gears: FC<IGearsProps> = ({ weapons, ac, armomr }) => {
  const classes = classNames({
    SkillsSection: true,
    'bg-green-700': true
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
        className="bg-green-700 text-white"
      >
        Gears
      </span>
      <div className="flex flex-col w-full justify-between">
        <div className="text-center my-2 w-full">
          <div className="w-24 h-24 mx-auto mb-4 border-8 border-red-700 rounded-full text-5xl">
            {ac}
          </div>
          <span className="text-lg"> {armomr} </span>
        </div>
        <div className="flex flex-col flex-wrap pt-2 items-start w-full">
          <table className="table-auto">
            <thead>
              <tr className="bg-gray-900 text-gray-200">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Damage</th>
                <th className="px-4 py-2">Hit/DC</th>
                <th className="px-4 py-2">Note</th>
              </tr>
            </thead>
            <tbody>
              {weapons.map(weaponName => {
                const weapon: IWeapon = AllWeapons[weaponName];
                return (
                  <tr className="bg-gray-300 border-b border-dashed border-gray-600 shadow">
                    <td className="px-4 py-2">{weapon.name}</td>
                    <td className="px-4 py-2">
                      {weapon.damage} {weapon.damagePlus && <> + {weapon.damagePlus}</>}
                    </td>
                    <td className="px-4 py-2">{weapon.hitDC}</td>
                    <td className="px-4 py-2 text-sm">{weapon.note}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default Gears;
