interface IAbility {
  baseNum: number;
  addedNum: number;
  advantage?: 'advantage' | 'disadvantage';
  prifucientSave: boolean;
}

interface ISkill {
  proficiency: 'half-proficient' | 'proficient' | 'expert';
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
    strength: ISkill;
    athletics: ISkill;
    dexterity: ISkill;
    acrobatics: ISkill;
    sleightOfHand: ISkill;
    stealth: ISkill;
    intelligence: ISkill;
    arcana: ISkill;
    history: ISkill;
    investigation: ISkill;
    nature: ISkill;
    religion: ISkill;
    wisdom: ISkill;
    animalHandling: ISkill;
    insight: ISkill;
    medicine: ISkill;
    perception: ISkill;
    survival: ISkill;
    charisma: ISkill;
    deception: ISkill;
    intimidation: ISkill;
    performance: ISkill;
    persuasion: ISkill;
  };
  passivePerception: number;
}
