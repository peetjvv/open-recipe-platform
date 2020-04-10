import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { Dispatch } from 'react-use-elmish';
import { Recipe } from '../../domain/recipes/types';
import { Action, State } from '../../domain/types';
import { Ingredient } from '../../domain/ingredients/types';
import vars from '../../scss/vars';

const NewRecipe: React.FC<{
  state: State;
  dispatch: Dispatch<Action>;
}> = props => {
  const { state, dispatch } = props;

  useEffect(() => {
    dispatch({ type: 'INGREDIENTS', subtype: 'FETCH_INGREDIENTS' });
  }, []);

  const [newRecipe, setNewRecipe] = useState<Partial<Recipe>>();
  const [newIngredients, setNewIngredients] = useState<Partial<Ingredient>[]>(
    []
  );

  return null;
};

export default NewRecipe;
