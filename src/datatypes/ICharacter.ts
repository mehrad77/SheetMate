export interface ICharacter {
  // 1. character section
  name: string;
  alignment: 'LG' | 'NG' | 'CG' | 'LN' | 'NN' | 'CN' | 'LE' | 'NE' | 'CE';
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
  xp: number;
  age: number;
  sex: string;
  height: number;
  weight: number;
  size:
    | 'fine'
    | 'diminutive'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'huge'
    | 'gargantuan'
    | 'colossal'
    | 'colossal +';
  inspiration: boolean;
  movementSpeed: number;
  racialAbilities: string;
  languages: {
    // Standard Languages
    common?: boolean;
    dwarvish?: boolean;
    elvish?: boolean;
    giant?: boolean;
    gnomish?: boolean;
    goblin?: boolean;
    halfling?: boolean;
    orc?: boolean;
    // TODO: add other languages
  };
}
