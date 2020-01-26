import { ICharacterSheet } from '../datatypes';
import { WeaponName } from './weapons';

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
  gears: {
    weapons: [WeaponName.Dagger, WeaponName.LightCrossbow],
    // 10 + armor + dex mod
    ac: 14,
    armomr: 'Studded Leather'
  },
  skills: {
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
    proficiencyBonus: 2,
    skills: {
      acrobatics: {
        parent: 'DEX',
        proficiency: 'half-proficient'
      },
      animalHandling: {
        parent: 'WIS',
        proficiency: 'half-proficient'
      },
      arcana: {
        parent: 'INT',
        proficiency: 'half-proficient'
      },
      athletics: {
        parent: 'STR',
        proficiency: 'half-proficient'
      },
      deception: {
        parent: 'CHA',
        proficiency: 'half-proficient'
      },
      history: {
        parent: 'INT',
        proficiency: 'half-proficient'
      },
      insight: {
        parent: 'WIS',
        proficiency: 'half-proficient'
      },
      intimidation: {
        parent: 'INT',
        proficiency: 'proficient'
      },
      investigation: {
        parent: 'INT',
        proficiency: 'half-proficient'
      },
      medicine: {
        parent: 'WIS',
        proficiency: 'half-proficient'
      },
      nature: {
        parent: 'INT',
        proficiency: 'half-proficient'
      },
      perception: {
        parent: 'WIS',
        proficiency: 'proficient'
      },
      performance: {
        parent: 'CHA',
        proficiency: 'expert'
      },
      persuasion: {
        parent: 'CHA',
        proficiency: 'proficient'
      },
      religion: {
        parent: 'INT',
        proficiency: 'half-proficient'
      },
      sleightOfHand: {
        parent: 'DEX',
        proficiency: 'half-proficient'
      },
      stealth: {
        parent: 'DEX',
        proficiency: 'expert'
      },
      survival: {
        parent: 'WIS',
        proficiency: 'half-proficient'
      }
    },
    passivePerception: 18
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
      allies: ['Harpers', 'Minins'],
      enemies: []
    },
    faction: undefined
  }
};

export { sampleCharacterSheet };
