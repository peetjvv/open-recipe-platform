import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Recipe } from '../../domain/recipes/types';

const Recipe: React.FC<{ recipe: Recipe }> = props => {
  const { recipe } = props;

  return <div></div>;
};

export default Recipe;
