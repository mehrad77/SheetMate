import React, { FC } from 'react';
import classNames from 'classnames';

interface IBorderdBox {
  title: string;
}

const BorderdBox: FC<IBorderdBox> = ({ title, children }) => {
  const classes = classNames({
    'border-2 border-dashed border-yellow-800 p-2 m-2': true
  });

  return (
    <p className={classes}>
      <strong className="text-lg">{title}</strong>
      <br />
      {children}
    </p>
  );
};

export default BorderdBox;
