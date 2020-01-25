import React, { FC } from 'react';
import classNames from 'classnames';
import { ICharacterSheet } from '../../datatypes';

interface ISheet {
  character?: ICharacterSheet;
}

const Sheet: FC<ISheet> = ({ children, character }) => {
  const classes = classNames({});

  return <div className={`${classes}`}>{children}</div>;
};

export default Sheet;
