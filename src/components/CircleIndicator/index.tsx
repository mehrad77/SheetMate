import React, { FC } from 'react';

interface ICircleIndicatorProps {
  title: string;
  value: number;
  className?: string;
  // string of tailwind colors
  color?: string;
}

const CircleIndicator: FC<ICircleIndicatorProps> = ({
  title,
  value,
  className,
  color = 'orange'
}) => {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <div
        className={`rounded-full flex justify-center items-center bg-${color}-900
        shadow-lg z-10 w-12 h-12 text-2xl text-orange-400`}
      >
        {title}
      </div>
      <div
        className={`bg-${color}-400 rounded-r-full shadow-md -ml-3 text-right
        pr-4 w-24 h-8 text-xl`}
      >
        {value}
      </div>
    </div>
  );
};

export default CircleIndicator;
