import { MapObject } from './misc';

export type Ingredient = {
  id: string;
  name: string;
  dryness: 'wet' | 'dry' | 'other';
  measurement: 'weight' | 'volume';
}[];

export type IngredientsMapObject = MapObject<Ingredient>;
