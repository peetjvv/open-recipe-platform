import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import ViewRecipe from './view-recipe';
import NewRecipe from './new-recipe';
import RecipesList from './recipes-list';
import { RouteDefinitions } from '../routes';

const Recipes: React.FC<{}> = props => {
  const {} = props;

  return (
    <div>
      <Switch>
        <Route exact path={RouteDefinitions.NEW_RECIPE.path}>
          <NewRecipe />
        </Route>
        <Route path={RouteDefinitions.VIEW_RECIPE.path}>
          <ViewRecipe />
        </Route>
        <Route path={RouteDefinitions.RECIPES.path}>
          <RecipesList />
        </Route>
      </Switch>
    </div>
  );
};

export default Recipes;
