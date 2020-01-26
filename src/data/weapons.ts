import { IWeapon } from '../datatypes';

export enum WeaponName {
  'Dagger' = 'Dagger',
  'LightCrossbow' = 'LightCrossbow',
  'UnarmedStrike' = 'UnarmedStrike'
}

type TWeapons = {
  [key in keyof typeof WeaponName]: IWeapon;
};

export const weapons: TWeapons = {
  UnarmedStrike: {
    name: 'Unarmed Strike',
    range: 'melee',
    damage: 0,
    damagePlus: 0,
    hitDC: 3,
    damageType: 'bludgeoning',
    note:
      'You can punch, kick, head-butt, or use a similar forceful blow and deal bludgeoning damage equal to 1 + STR modifier'
  },
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
