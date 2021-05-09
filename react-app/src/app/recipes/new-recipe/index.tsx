import * as React from 'react';
import { useState } from 'react';
import { CreatingRecipe } from '../../../types/recipe';
import { Ingredient } from '../../../types/ingredient';

const NewRecipe: React.FC<{}> = props => {
  const {} = props;

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
