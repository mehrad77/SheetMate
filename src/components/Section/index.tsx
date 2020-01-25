import React, { FC } from 'react';
import classNames from 'classnames';

interface ISectionProps {
  className?: string;
}

const Section: FC<ISectionProps> = ({ className, children }) => {
  const classes = classNames({
    'p-2 flex flex-col md:flex-row bg-yellow-500 w-full shadow-xl': true
  });

  return <div className={`${classes} ${className}`}>{children}</div>;
};

export default Section;
