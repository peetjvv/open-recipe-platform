export type State = FooState;

export type Action = FooAction;

type FooState = { foo: string };
type FooAction = { type: 'FOO'; subtype: 'ADD_R' };
