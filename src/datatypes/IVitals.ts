type THitDice = 'd6' | 'd8' | 'd10' | 'd12';

export interface IVitals {
  // 3. vitals section
  maxHP: number;
  currentHP: number;
  tempHP: number;
  hitDice: THitDice;
  deathSaves?: { 1: boolean; 2: boolean; 3: boolean };
  things: {
    blinded?: boolean;
    charmed?: boolean;
    deafened?: boolean;
    frightened?: boolean;
    grappled?: boolean;
    vitals?: boolean;
    superior?: boolean;
    supreme?: boolean;
    incapacitated?: boolean;
    invisible?: boolean;
    paralyzed?: boolean;
    petrified?: boolean;
    poisoned?: boolean;
    prone?: boolean;
    restrained?: boolean;
    stunned?: boolean;
    unconscious?: boolean;
  };
}
