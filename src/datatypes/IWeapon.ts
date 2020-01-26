export interface IWeapon {
  name: string;
  range: 'melee' | 'ranged';
  damage: '1d4' | '1d6' | '1d8' | '1d10' | '1d12' | '2d4' | '2d6' | '2d8' | '2d10' | '2d12';
  damagePlus?: number;
  hitDC: number;
  damageType: 'bludgeoning' | 'piercing' | 'slashing';
  note?: string;
}
