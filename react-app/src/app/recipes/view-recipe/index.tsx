import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'react-use-elmish';
import { AllActions, State } from '../../../data';

const ViewRecipe: React.FC<{
  state: State;
  dispatch: Dispatch<AllActions>;
}> = props => {
  const { state, dispatch } = props;

  const { recipeId } = useParams<{ recipeId: string }>();

  // TODO: use recipeId to get recipe
  // TODO: show 404 if recipe not found: <Error errorCode={404} overrideMessage="Recipe not found" />
  // const recipe: Recipe = null;

  return <div>TODO: Recipe page here. recipeId='{recipeId}'</div>;
};

export default ViewRecipe;
