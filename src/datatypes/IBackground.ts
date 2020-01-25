export interface IBackground {
  // 9. background
  backgroundName: string;
  trait: string;
  bond: string;
  ideal: string;
  flaw: string;
  organisations: {
    allies: string[];
    enemies: string[];
  };
  faction?: string;
}
