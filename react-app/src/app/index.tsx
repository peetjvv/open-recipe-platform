import * as React from 'react';
import TopBar from './top-bar';
import Home from './home';
import NewRecipe from './new-recipe';
import Error from './errors';
import useApp from '../domain/use-app';
import '../scss/main.scss';

const App: React.FC<{}> = props => {
  const [state, dispatch] = useApp();

  if (state.theme.suite === 'DARK') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

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
    <div className="w-screen h-screen font-body text-black dark:text-grey-light dark:bg-grey-dark">
      <TopBar themeSuite={state.theme.suite} dispatch={dispatch} />
      <div className="content-panel">{currentMainComponent}</div>
    </div>
  );
};

export default App;
