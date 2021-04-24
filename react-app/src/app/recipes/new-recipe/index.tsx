import * as React from 'react';
import { useState, useEffect } from 'react';
import { Dispatch } from 'react-use-elmish';
import { CreatingRecipe, Recipe } from '../../../domain/recipes/types';
import { Action, State } from '../../../domain/types';
import { Ingredient } from '../../../domain/ingredients/types';

const NewRecipe: React.FC<{
  state: State;
  dispatch: Dispatch<Action>;
}> = props => {
  const { state, dispatch } = props;

  useEffect(() => {
    dispatch({ type: 'INGREDIENTS', subtype: 'FETCH_INGREDIENTS' });
  }, []);

  const [newRecipe, setNewRecipe] = useState<CreatingRecipe>({
    name: '',
    aka: [],
    ingredients: [],
    steps: [],
  });
  const [newIngredients, setNewIngredients] = useState<Partial<Ingredient>[]>(
    []
  );

  return <div>TODO: new recipe page here</div>;
};

export default NewRecipe;
