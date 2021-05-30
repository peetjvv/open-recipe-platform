import * as React from 'react';
import { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from './top-bar';
import Home from './home';
import { Anchor, Error, ErrorBoundary } from './components';
import { combinedReducer, initialState } from '../data';
import Recipes from './recipes';
import { RoutePaths } from './routes';
import AuthProvider from './contexts/auth-context';
import '../scss/main.scss';

const App: React.FC<{}> = props => {
  const [state, dispatch] = useReducer(combinedReducer, initialState);

  if (state.theme.suite === 'DARK') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <AuthProvider>
      <Router>
        <ErrorBoundary>
          <div className="flex flex-col items-center h-screen font-body text-black dark:text-grey-light">
            <div className="page-container flex-grow flex flex-col my-16">
              <TopBar themeSuite={state.theme.suite} dispatch={dispatch} />
              <div className="content-panel flex-grow flex rounded-lg bg-white dark:bg-grey-dark bg-opacity-90 dark:bg-opacity-10">
                <Switch>
                  <Route exact path={RoutePaths.HOME}>
                    <Home state={state} dispatch={dispatch} />
                  </Route>
                  <Route path={RoutePaths.RECIPES}>
                    <Recipes />
                  </Route>
                  {/* Keep this very last since it's the fallback in case no route matched */}
                  <Route path="*">
                    <Error errorCode={404} />
                  </Route>
                </Switch>
              </div>
            </div>

            <div className="absolute z-0 bottom-0 right-0 px-2 py-1 bg-white dark:bg-grey-dark bg-opacity-90 dark:bg-opacity-10 text-sm">
              <p>
                Background photo by{' '}
                {state.theme.suite === 'DARK' ? (
                  <Anchor
                    target="_blank"
                    href="https://unsplash.com/@nordwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  >
                    NordWood Themes
                  </Anchor>
                ) : (
                  <Anchor
                    target="_blank"
                    href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                  >
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
        </ErrorBoundary>
      </Router>
    </AuthProvider>
  );
};

export default App;
