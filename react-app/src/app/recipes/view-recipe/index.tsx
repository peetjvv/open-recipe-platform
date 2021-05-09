import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Recipe } from '../../../types/recipe';
import { db } from '../../../firebase';
import { throwIfNotNever } from '../../../util/typescript';
import { Error } from '../../components';
import { DbLookupStatus } from '../../../types/misc';
import Loader from '../../components/loader';

const ViewRecipe: React.FC<{}> = props => {
  const {} = props;

  const { recipeId } = useParams<{ recipeId: string }>();

  const [recipe, setRecipe] = useState<Recipe>();
  const [lookupStatus, setLookupStatus] = useState<DbLookupStatus>(
    'not-started'
  );
  useEffect(() => {
    setLookupStatus('fetching');
    db.collection('recipes')
      .doc(recipeId)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          setRecipe(snapshot.data() as Recipe);
          setLookupStatus('done');
        } else {
          setLookupStatus('not-found');
        }
      })
      .catch(() => {
        setLookupStatus('error');
      });
  }, []);

  let content: React.ReactNode;
  switch (lookupStatus) {
    case 'not-started':
    case 'fetching':
      content = <Loader loadingText="Loading recipe..." />;
      break;

    case 'not-found':
      content = <Error errorCode={404} overrideMessage="Recipe not found" />;
      break;

    case 'error':
      content = <Error overrideMessage="Failed to load recipe" />;
      break;

    case 'done':
      content = (
        <>
          <p>recipeId='{recipeId}'</p>
          <p>recipe={JSON.stringify(recipe)}</p>
        </>
      );
      break;

    default:
      throwIfNotNever(lookupStatus);
      break;
  }

  return <div>{content}</div>;
};

export default ViewRecipe;
