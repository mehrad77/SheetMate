import { IWeapon } from '../datatypes';

export enum WeaponName {
  'Dagger' = 'Dagger',
  'LightCrossbow' = 'LightCrossbow'
}

type TWeapons = {
  [key in keyof typeof WeaponName]: IWeapon;
};

export const weapons: TWeapons = {
  Dagger: {
    name: 'Dagger',
    range: 'melee',
    damage: '1d4',
    damagePlus: 2,
    hitDC: 4,
    damageType: 'piercing',
    note: 'Finesse, light, thrown (range 20/60)'
  },
  LightCrossbow: {
    name: 'Light Crossbow',
    range: 'melee',
    damage: '1d8',
    damagePlus: 2,
    hitDC: 4,
    damageType: 'piercing',
    note: 'Simple, Ammunition, Loading, Range, Two-Handed, Range (80/320)'
  }
};
