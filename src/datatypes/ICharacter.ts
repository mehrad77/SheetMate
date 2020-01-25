export type TAlignment = 'LG' | 'NG' | 'CG' | 'LN' | 'NN' | 'CN' | 'LE' | 'NE' | 'CE';
export type TLevel =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;
export type TSize =
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

export interface ILanguages {
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
}

export type TRace =
  | 'Human'
  | 'Elf'
  | 'Halfling'
  | 'Dwarf'
  | 'Tiefling'
  | 'Dragonborn'
  | 'Eladrin'
  | 'Half-orc'
  | 'Gnome'
  | 'Half-elf';

export type TClass =
  | 'Artificer'
  | 'Barbarian'
  | 'Bard'
  | 'Cleric'
  | 'Druid'
  | 'Fighter'
  | 'Monk'
  | 'Paladin'
  | 'Ranger'
  | 'Wizard'
  | 'Sorcerer'
  | 'Rogue'
  | 'Warlock';

export interface ICharacter {
  // 1. character section
  name: string;
  race: TRace;
  class: TClass;
  alignment: TAlignment;
  level: TLevel;
  xp?: number;
  age: number;
  sex: string;
  height: number;
  weight: number;
  size: TSize;
  inspiration: boolean;
  movementSpeed: number;
  racialAbilities?: string;
  languages: ILanguages;
}
