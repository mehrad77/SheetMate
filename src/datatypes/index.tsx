import { ICharacter } from './ICharacter';
import { IMoney } from './IMoney';
import { IVitals } from './IVitals';
import { ISkils } from './ISkils';
import { IBackground } from './IBackground';

interface ICharacterSheet {
  character: ICharacter;
  money: IMoney;
  // 2. class feature section
  vitals: IVitals;
  // 4. gears section
  skils: ISkils;
  // 6. money
  // 7. equipment
  // 8. attuned
  // 9. feats
  background: IBackground;
  // 11. Cantrips
  // 12. Spells
}

// @ts-ignore
export { ICharacterSheet, ICharacter, IMoney, IVitals, ISkils, IBackground };
