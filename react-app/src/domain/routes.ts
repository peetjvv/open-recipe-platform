// TODO: replace with something from react-router-dom / react-router
type Route = { path: string; params?: string[] };

type RouteName =
  | 'HOME'
  | 'RECIPES'
  | 'VIEW_RECIPE'
  | 'NEW_RECIPE'
  | 'EDIT_RECIPE';

const recipesPath = '/recipes';

// TODO: use params defined here in useParams hooks somehow
export const RouteDefinitions: { [key in RouteName]: Route } = {
  HOME: { path: '/' },
  RECIPES: { path: recipesPath },
  VIEW_RECIPE: { path: `${recipesPath}/:recipeId`, params: ['recipeId'] },
  NEW_RECIPE: { path: `${recipesPath}/new` },
  EDIT_RECIPE: { path: `${recipesPath}/edit/:recipeId`, params: ['recipeId'] },
};
