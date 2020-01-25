export interface ISkils {
  // 5. skills
  abilities: {
    STR: {
      baseNum: number;
      addedNum: number;
      advantage?: 'advantage' | 'disadvantage';
      prifucientSave: boolean;
    };
    DEX: {
      baseNum: number;
      addedNum: number;
      advantage?: 'advantage' | 'disadvantage';
      prifucientSave: boolean;
    };
    CON: {
      baseNum: number;
      addedNum: number;
      advantage?: 'advantage' | 'disadvantage';
      prifucientSave: boolean;
    };
    INT: {
      baseNum: number;
      addedNum: number;
      advantage?: 'advantage' | 'disadvantage';
      prifucientSave: boolean;
    };
    WIS: {
      baseNum: number;
      addedNum: number;
      advantage?: 'advantage' | 'disadvantage';
      prifucientSave: boolean;
    };
    CHA: {
      baseNum: number;
      addedNum: number;
      advantage?: 'advantage' | 'disadvantage';
      prifucientSave: boolean;
    };
  };
  proficiencyBonus: number;
  skills: {
    strength: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    athletics: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    dexterity: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    acrobatics: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    sleightOfHand: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    stealth: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    intelligence: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    arcana: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    history: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    investigation: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    nature: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    religion: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    wisdom: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    animalHandling: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    insight: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    medicine: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    perception: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    survival: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    charisma: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    deception: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    intimidation: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    performance: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
    persuasion: {
      score: number;
      proficiency: boolean;
      expertise: boolean;
    };
  };
}
