import React, { FC } from 'react';
import classNames from 'classnames';

interface ILevelBoxProps {
  title: string;
  value: string | number;
}

const LevelBox: FC<ILevelBoxProps> = ({ title, value }) => {
  const classes = classNames({
    'px-2 mx-2': true,
    'inline-flex flex-col justify-center items-center': true,
    'bg-orange-800 text-white shadow': true
  });

  return (
    <div className={classes}>
      <span className="text-2xl">{value}</span>
      <span className="text-sm capitalize">{title}</span>
    </div>
  );
};

export default LevelBox;
