import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dispatch } from 'react';
import { AllActions, State } from '../../data';
import ViewRecipe from './view-recipe';
import NewRecipe from './new-recipe';
import { RouteDefinitions } from '../routes';

const Recipes: React.FC<{
  state: State;
  dispatch: Dispatch<AllActions>;
}> = props => {
  const { state, dispatch } = props;

  return (
    <div>
      <Switch>
        <Route exact path={RouteDefinitions.NEW_RECIPE.path}>
          <NewRecipe state={state} dispatch={dispatch} />
        </Route>
        <Route path={RouteDefinitions.VIEW_RECIPE.path}>
          <ViewRecipe state={state} dispatch={dispatch} />
        </Route>
        <Route path={RouteDefinitions.RECIPES.path}>
          TODO: recipes page here
        </Route>
      </Switch>
    </div>
  );
};

export default Recipes;
