import * as React from 'react';
import { useState, useEffect } from 'react';
import { Dispatch } from 'react';
import { CreatingRecipe, Recipe } from '../../../types/recipe';
import { AllActions, State } from '../../../data';
import { Ingredient } from '../../../types/ingredient';

const NewRecipe: React.FC<{
  state: State;
  dispatch: Dispatch<AllActions>;
}> = props => {
  const { state, dispatch } = props;

  // useEffect(() => {
  //   dispatch({ type: 'INGREDIENTS', subtype: 'FETCH_INGREDIENTS' });
  // }, []);

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
