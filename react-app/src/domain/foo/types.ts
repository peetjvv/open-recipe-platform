export type FooState = { foo: { bars: string; barCount: number } };
export type FooAction = AddBarAction | IncrementBarCountAction;

type BaseFooAction = { type: 'FOO' };
export type AddBarAction = BaseFooAction & { subtype: 'ADD_BAR' };
export type IncrementBarCountAction = BaseFooAction & {
  subtype: 'INCREMENT_BAR_COUNT';
};
