import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { Recipe } from '../../domain/recipes/types';
import vars from '../../scss/vars';
import { Dispatch } from 'react-use-elmish';
import { Action, State } from '../../domain/types';

const NewRecipe: React.FC<{
  state: State;
  dispatch: Dispatch<Action>;
}> = props => {
  const { state, dispatch } = props;

  useEffect(() => {
    dispatch({ type: 'INGREDIENTS', subtype: 'FETCH_INGREDIENTS' });
  }, []);

  const [newRecipe, setNewRecipe] = useState<Partial<Recipe>>();

  return null;
};

export default NewRecipe;
