import { ICharacter } from './ICharacter';
import { IMoney } from './IMoney';
import { IGears } from './IGears';
import { IVitals } from './IVitals';
import { ISkils } from './ISkils';
import { IBackground } from './IBackground';
import { IWeapon } from './IWeapon';

interface ICharacterSheet {
  character: ICharacter;
  money: IMoney;
  // 2. class feature section
  vitals: IVitals;
  gears: IGears;
  skills: ISkils;
  // 6. money
  // 7. equipment
  // 8. attuned
  // 9. feats
  background: IBackground;
  // 11. Cantrips
  // 12. Spells
}

// @ts-ignore
export { ICharacterSheet, ICharacter, IMoney, IVitals, ISkils, IBackground, IWeapon };
