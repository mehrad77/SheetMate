import React, { FC } from 'react';
import classNames from 'classnames';

interface IBox {
  title: string;
}

const Box: FC<IBox> = ({ title, children }) => {
  const classes = classNames({
    'p-2': true
  });

  return (
    <div className={`${classes}`}>
      <span className="font-bold uppercase">{title}: </span>
      {children}
    </div>
  );
};

export default Box;
