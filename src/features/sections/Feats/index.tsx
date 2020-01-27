import React, { FC } from 'react';
import classNames from 'classnames';
import { Section } from '../../../components';
import { IFeat } from '../../../datatypes';

interface IFeatsProps {
  feats: IFeat[];
}

const Feats: FC<IFeatsProps> = ({ feats }) => {
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
        Feats
      </span>
      <div className="flex flex-col w-full justify-between">
        <table className="table-auto">
          <thead>
            <tr className="bg-gray-900 text-gray-200">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Feat Type</th>
              <th className="px-4 py-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {feats.map(feat => {
              return (
                <tr className="bg-gray-300 border-b border-dashed border-gray-600 shadow">
                  <td className="px-4 py-2">{feat.name}</td>
                  <td className="px-4 py-2">{feat.type}</td>
                  <td className="px-4 py-2">{feat.note}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default Feats;
