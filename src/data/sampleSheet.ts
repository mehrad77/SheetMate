import { ICharacterSheet } from '../datatypes';

const sampleCharacterSheet: ICharacterSheet = {
  character: {
    name: 'Gizzard Jojor',
    race: 'Half-elf',
    class: 'Bard',
    alignment: 'NG',
    level: 3,
    age: 30,
    sex: 'female',
    height: 180,
    weight: 73,
    size: 'medium',
    inspiration: false,
    movementSpeed: 30,
    languages: {
      common: true,
      elvish: true,
      halfling: true
    }
  },
  vitals: {
    maxHP: 27,
    currentHP: 27,
    tempHP: 0,
    hitDice: 'd8',
    deathSaves: undefined,
    things: {
      blinded: false,
      charmed: true,
      deafened: false,
      frightened: true,
      grappled: false,
      incapacitated: false,
      invisible: true,
      paralyzed: false,
      petrified: false,
      poisoned: false,
      prone: false,
      restrained: false,
      stunned: false,
      unconscious: false
    }
  },
  skils: {
    abilities: {
      STR: {
        baseNum: 12,
        addedNum: 0,
        prifucientSave: false
      },
      DEX: {
        baseNum: 14,
        addedNum: 0,
        prifucientSave: true
      },
      CON: {
        baseNum: 14,
        addedNum: 0,
        prifucientSave: false
      },
      INT: {
        baseNum: 15,
        addedNum: 0,
        prifucientSave: false
      },
      WIS: {
        baseNum: 18,
        addedNum: 0,
        prifucientSave: false
      },
      CHA: {
        baseNum: 19,
        addedNum: 0,
        prifucientSave: true
      }
    },
    proficiencyBonus: 3,
    skills: {
      strength: {
        proficiency: 'half-proficient'
      },
      athletics: {
        proficiency: 'half-proficient'
      },
      dexterity: {
        proficiency: 'half-proficient'
      },
      acrobatics: {
        proficiency: 'half-proficient'
      },
      sleightOfHand: {
        proficiency: 'half-proficient'
      },
      stealth: {
        proficiency: 'expert'
      },
      intelligence: {
        proficiency: 'half-proficient'
      },
      arcana: {
        proficiency: 'half-proficient'
      },
      history: {
        proficiency: 'half-proficient'
      },
      investigation: {
        proficiency: 'half-proficient'
      },
      nature: {
        proficiency: 'half-proficient'
      },
      religion: {
        proficiency: 'half-proficient'
      },
      wisdom: {
        proficiency: 'half-proficient'
      },
      animalHandling: {
        proficiency: 'half-proficient'
      },
      insight: {
        proficiency: 'half-proficient'
      },
      medicine: {
        proficiency: 'half-proficient'
      },
      perception: {
        proficiency: 'proficient'
      },
      survival: {
        proficiency: 'half-proficient'
      },
      charisma: {
        proficiency: 'half-proficient'
      },
      deception: {
        proficiency: 'half-proficient'
      },
      intimidation: {
        proficiency: 'proficient'
      },
      performance: {
        proficiency: 'expert'
      },
      persuasion: {
        proficiency: 'proficient'
      }
    }
  },
  money: {
    CP: 0,
    SP: 0,
    EP: 0,
    GP: 0,
    PP: 0
  },
  background: {
    backgroundName: 'Wanderlust',
    trait: 'I feel at home whenever the unknown surrounds me, I receive its embrace.',
    bond: ' I want to create or join a network of good benevolent people.',
    ideal: 'Everyone should see the wonders around us all the time, I must teach them to search.',
    flaw:
      'I secretly always wanted to know what happened to my father, and I want to see him or his family once.',
    organisations: {
      allies: [],
      enemies: []
    },
    faction: undefined
  }
};

export { sampleCharacterSheet };
