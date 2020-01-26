import React, { FC } from 'react';

interface ISingleCurrecyProps {
  title: string;
  value: number;
}

const SingleCurrecy: FC<ISingleCurrecyProps> = ({ title, value }) => {
  return (
    <div className={'flex flex-row items-center -mt-2'}>
      <div
        className={
          'rounded-full flex justify-center items-center bg-orange-900 shadow-lg z-10 w-12 h-12 text-2xl text-orange-400'
        }
      >
        {title}
      </div>
      <div
        className={'bg-orange-400 rounded-r-full shadow-md -ml-3 text-right pr-4 w-24 h-8 text-xl'}
      >
        {value}
      </div>
    </div>
  );
};

export default SingleCurrecy;
