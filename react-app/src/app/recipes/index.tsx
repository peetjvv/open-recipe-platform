import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import ViewRecipe from './view-recipe';
import NewRecipe from './new-recipe';
import RecipesList from './recipes-list';
import { RoutePaths } from '../routes';

const Recipes: React.FC<{}> = props => {
  const {} = props;

  return (
    <div>
      <Switch>
        <Route exact path={RoutePaths.NEW_RECIPE}>
          <NewRecipe />
        </Route>
        <Route path={RoutePaths.VIEW_RECIPE}>
          <ViewRecipe />
        </Route>
        <Route path={RoutePaths.RECIPES}>
          <RecipesList />
        </Route>
      </Switch>
    </div>
  );
};

export default Recipes;
