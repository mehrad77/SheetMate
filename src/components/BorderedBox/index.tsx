import React, { FC } from 'react';
import classNames from 'classnames';

interface IBorderdBox {
  title: string;
  className?: string;
}

const BorderdBox: FC<IBorderdBox> = ({ title, children, className }) => {
  const classes = classNames({
    'border-2 border-dashed p-2 m-2': true
  });

  return (
    <p className={`${classes} ${className}`}>
      <strong className="text-lg">{title}</strong>
      <br />
      {children}
    </p>
  );
};

export default BorderdBox;
