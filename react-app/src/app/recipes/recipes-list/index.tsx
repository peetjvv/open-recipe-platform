import * as React from 'react';
import { useEffect, useState } from 'react';
import { Recipe, RecipeMapObject } from '../../../types/recipe';
import { db } from '../../../firebase';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routes';
import { DbLookupStatus } from '../../../types/misc';
import { Error } from '../../components';
import { throwIfNotNever } from '../../../util/typescript';
import Loader from '../../components/loader';

const RecipeCard: React.FC<{ recipe: Recipe }> = props => {
  const { recipe } = props;
  return (
    <Link to={RoutePaths.VIEW_RECIPE.replace(':recipeId', recipe.id)}>
      <div>
        {recipe.id}: {JSON.stringify(recipe)}
      </div>
    </Link>
  );
};

const RecipesList: React.FC<{}> = props => {
  const {} = props;

  const [recipes, setRecipes] = useState<RecipeMapObject>({});
  const [lookupStatus, setLookupStatus] = useState<DbLookupStatus>(
    'not-started'
  );
  useEffect(() => {
    setLookupStatus('fetching');
    db.collection('recipes')
      .get()
      .then(snapshot => {
        const result: RecipeMapObject = {};
        snapshot.forEach(doc => {
          result[doc.id] = doc.data() as Recipe;
        });
        setRecipes(result);
        setLookupStatus('done');
      })
      .catch(() => {
        setLookupStatus('error');
      });
  }, []);

  let content: React.ReactNode;
  switch (lookupStatus) {
    case 'not-started':
    case 'fetching':
      content = <Loader loadingText="Loading recipes..." />;
      break;

    case 'not-found':
      content = <Error errorCode={404} overrideMessage="Recipes not found" />;
      break;

    case 'error':
      content = <Error overrideMessage="Failed to load recipes" />;
      break;

    case 'done':
      content = (
        <>
          {Object.values(recipes).map((recipe, idx) => (
            <RecipeCard key={idx} recipe={recipe} />
          ))}
        </>
      );
      break;

    default:
      throwIfNotNever(lookupStatus);
      break;
  }

  return <div>{content}</div>;
};

export default RecipesList;
