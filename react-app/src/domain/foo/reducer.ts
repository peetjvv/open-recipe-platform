import { FooState, FooAction } from './types';
import { StateEffectPair, Effects } from 'react-use-elmish';
import { State } from '../types';
import { throwIfNotNever } from '../../util/typescript';
import { incrementBarCount } from './action-creators';

export const initialState: FooState = { foo: { bars: 'bar', barCount: 1 } };

export const reducer = (
  prevState: State,
  action: FooAction
): StateEffectPair<State, FooAction> => {
  switch (action.subtype) {
    case 'ADD_BAR':
      return [
        {
          ...prevState,
          foo: { ...prevState.foo, bars: `${prevState.foo.bars} bar` },
        },
        Effects.action(incrementBarCount()),
      ];
    case 'INCREMENT_BAR_COUNT':
      return [
        {
          ...prevState,
          foo: { ...prevState.foo, barCount: prevState.foo.barCount + 1 },
        },
        Effects.none(),
      ];
    default:
      return throwIfNotNever(action);
  }
};
