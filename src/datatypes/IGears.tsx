import { WeaponName } from '../data/weapons';

export interface IGears {
  weapons: WeaponName[];
  ac: number;
  armomr?: string;
}
