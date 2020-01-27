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
    weapons: [WeaponName.Dagger, WeaponName.LightCrossbow, WeaponName.UnarmedStrike],
    // 10 + armor + dex mod
    ac: 14,
    armomr: 'Studded Leather'
  },
  feats: [
    {
      type: 'Class',
      name: 'Proficiency',
      note: `
      Flute
      Pan Flute
      Lute
      Stealth
      Perception
      Persuasion`
    },
    {
      type: 'Class',
      name: 'Spellcasting',
      note: `You can cast known bard spells using CHA as your spellcasting modifier (Spell DC 14, Spell Attack +6) and known bard spells as rituals if they have the ritual tag. You can use a musical instrument as a spellcasting focus.`
    },
    {
      type: 'Class',
      name: 'Bardic Inspiration',
      note: `As a bonus action, a creature (other than you) within 60 ft. that can hear you gains an inspiration die (1d6). For 10 minutes, the creature can add it to one ability check, attack roll, or saving throw. This can be added after seeing the roll, but before knowing the outcome. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.`
    },
    {
      type: 'Class',
      name: 'Jack of All Trades',
      note: `You can add half your proficiency bonus, rounded down ( +1 ), to any ability check you make that doesn’t already include it.`
    },
    {
      type: 'Class',
      name: 'Song of Rest',
      note: `If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.`
    },
    {
      type: 'Class',
      name: 'Expertise',
      note: `Your proficiency bonus is doubled for any ability check you make with chosen proficiencies (2 at 3rd and 10th level). Stealth
      Performance`
    },
    {
      type: 'Class',
      name: 'Cutting Words',
      note: `As a reaction when a creature (that's not immune to being charmed) you can see within 60 ft. makes an attack roll, ability check, or damage roll, you can expend one use of Bardic Inspiration, roll the die, and subtract the number from the creature's roll. You can do so after the roll but before knowing the result.
      Cutting Words: 1 Reaction`
    },
    {
      type: 'Racial',
      name: 'Darkvision',
      note: `You can see in darkness (shades of gray) up to 60 ft.`
    },
    {
      type: 'Racial',
      name: 'Fey Ancestry',
      note: `You have advantage on saving throws against being charmed, and magic can’t put you to sleep.`
    },
    {
      type: 'Racial',
      name: 'Skill Versatility',
      note: `You gain proficiency in two skills of your choice.
      Intimidation
      Performance`
    }
  ],
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
