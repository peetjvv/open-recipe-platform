export type Ingredient = {
  id: string;
  name: string;
  dryness: 'wet' | 'dry' | 'other';
  measurement: 'weight' | 'volume';
}[];
