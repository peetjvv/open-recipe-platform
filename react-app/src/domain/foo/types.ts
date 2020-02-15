export type FooState = { foo: string };
export type FooAction = AddBarAction;

export type AddBarAction = { type: 'FOO'; subtype: 'ADD_BAR' };
