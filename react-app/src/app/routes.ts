type RouteName =
  | 'HOME'
  | 'RECIPES'
  | 'VIEW_RECIPE'
  | 'NEW_RECIPE'
  | 'EDIT_RECIPE';

const recipesPath = '/recipes';

export const RoutePaths: {
  [key in RouteName]: string;
} = {
  HOME: '/',
  RECIPES: recipesPath,
  VIEW_RECIPE: `${recipesPath}/:recipeId`,
  NEW_RECIPE: `${recipesPath}/new`,
  EDIT_RECIPE: `${recipesPath}/edit/:recipeId`,
};
