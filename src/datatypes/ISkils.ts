export interface IAbility {
  baseNum: number;
  addedNum: number;
  advantage?: 'advantage' | 'disadvantage';
  prifucientSave: boolean;
}

export type TAbilityName = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

export interface ISkill {
  proficiency: 'none' | 'half-proficient' | 'proficient' | 'expert';
  parent: TAbilityName;
}

export interface ISkils {
  // 5. skills
  abilities: {
    STR: IAbility;
    DEX: IAbility;
    CON: IAbility;
    INT: IAbility;
    WIS: IAbility;
    CHA: IAbility;
  };
  proficiencyBonus: number;
  skills: {
    athletics: ISkill;
    acrobatics: ISkill;
    sleightOfHand: ISkill;
    stealth: ISkill;
    arcana: ISkill;
    history: ISkill;
    investigation: ISkill;
    nature: ISkill;
    religion: ISkill;
    animalHandling: ISkill;
    insight: ISkill;
    medicine: ISkill;
    perception: ISkill;
    survival: ISkill;
    deception: ISkill;
    intimidation: ISkill;
    performance: ISkill;
    persuasion: ISkill;
  };
  passivePerception: number;
}
