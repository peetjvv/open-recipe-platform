import { FooState, FooAction } from './types';
import { StateEffectPair, Effects } from 'react-use-elmish';
import { State } from '../types';
import { throwIfNotNever } from '../../util/typescript';

export const initialState: FooState = { foo: 'bar' };

export const reducer = (
  prev: State,
  action: FooAction
): StateEffectPair<FooState, FooAction> => {
  switch (action.subtype) {
    case 'ADD_BAR':
      const updatedState = { ...prev, foo: `${prev.foo}bar` };
      return [updatedState, Effects.none()];
    default:
      return throwIfNotNever(action.subtype);
  }
};
