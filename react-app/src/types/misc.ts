export type MapObject<V> = { [key: string]: V };
export type DbLookupStatus =
  | 'not-started'
  | 'fetching'
  | 'not-found'
  | 'error'
  | 'done';
