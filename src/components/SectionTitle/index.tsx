import React, { FC } from 'react';
import classNames from 'classnames';

interface ISectionTitle {
  title: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title }) => {
  const classes = classNames({
    'mb-2': true
  });

  return <h3 className={classes}>{title}</h3>;
};

export default SectionTitle;
