import * as React from 'react';
import { useEffect, useState } from 'react';
import { Recipe, RecipeMapObject } from '../../../types/recipe';
import { db } from '../../../firebase';

const RecipeCard: React.FC<{ recipe: Recipe }> = props => {
  const { recipe } = props;
  return (
    <div>
      {recipe.id}: {JSON.stringify(recipe)}
    </div>
  );
};

const RecipesList: React.FC<{}> = props => {
  const {} = props;

  const [recipes, setRecipes] = useState<RecipeMapObject>({});
  useEffect(() => {
    db.collection('recipes')
      .get()
      .then(snapshot => {
        const result: RecipeMapObject = {};
        snapshot.forEach(doc => {
          result[doc.id] = doc.data() as Recipe;
        });
        setRecipes(result);
      });
  }, []);

  return (
    <div>
      {!Object.keys(recipes).length
        ? 'Loading ...'
        : Object.values(recipes).map((recipe, idx) => (
            <RecipeCard key={idx} recipe={recipe} />
          ))}
    </div>
  );
};

export default RecipesList;
