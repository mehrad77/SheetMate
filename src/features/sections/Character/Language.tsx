import React, { FC } from 'react';
import { ILanguages } from '../../../datatypes/ICharacter';

interface ILanguageProps {
  languages: ILanguages;
}

const Language: FC<ILanguageProps> = ({ languages }) => {
  const arrLang = Object.keys(languages);
  return (
    <span>
      Knows
      {arrLang?.map((language, index) => (
        <span key={language}>
          {index !== 0 && index !== arrLang.length - 1 && <span>, </span>} {language}
          {index + 2 === arrLang.length && ' and '}
          {index + 1 === arrLang.length && '.'}
        </span>
      ))}
    </span>
  );
};

export default Language;
