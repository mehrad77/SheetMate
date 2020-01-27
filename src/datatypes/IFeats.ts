export type TFeatType = 'Class' | 'Racial' | 'Other';

export interface IFeat {
  type: TFeatType;
  name: string;
  note: string;
}
