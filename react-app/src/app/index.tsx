import * as React from 'react';
import TopBar from './top-bar';
import Home from './home';
import NewRecipe from './new-recipe';
import Error from './errors';
import { Anchor } from './components';
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
    <div className="w-screen h-screen font-body text-black dark:text-grey-light">
      <TopBar themeSuite={state.theme.suite} dispatch={dispatch} />
      <div>{currentMainComponent}</div>

      <div className="absolute z-0 bottom-0 right-0 px-2 py-1 bg-white dark:bg-grey-dark bg-opacity-90 dark:bg-opacity-10 text-sm">
        <p>
          Background photo by{' '}
          {state.theme.suite === 'DARK' ? (
            <Anchor href="https://unsplash.com/@nordwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              NordWood Themes
            </Anchor>
          ) : (
            <Anchor href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Brooke Lark
            </Anchor>
          )}{' '}
          on{' '}
          <Anchor href="https://unsplash.com/s/photos/cooking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </Anchor>
        </p>
      </div>
    </div>
  );
};

export default App;
