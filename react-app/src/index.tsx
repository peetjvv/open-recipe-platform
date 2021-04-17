import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TopBar, Home, NewRecipe, Recipe, Recipes, Error } from './app';
import useApp from './domain/use-app';
import './init-firebase';
import './scss/main.scss';

const App: React.FC<{}> = () => {
  const [state, dispatch] = useApp();

  let currentMainComponent;
  switch (state.router.currentRoute) {
    case 'HOME':
      currentMainComponent = <Home state={state} dispatch={dispatch} />;
      break;
    case 'NEW_RECIPE':
      currentMainComponent = <NewRecipe state={state} dispatch={dispatch} />;
      break;
    case 'RECIPES':
    // currentMainComponent = <Recipes />;
    // break;
    case 'RECIPE':
    // currentMainComponent = <Recipe recipe={null} />;
    // break;
    case false:
    default:
      currentMainComponent = <Error errorCode={404} />;
      break;
  }

  return (
    <>
      <TopBar state={state} dispatch={dispatch} />
      <div className="content-panel">{currentMainComponent}</div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
