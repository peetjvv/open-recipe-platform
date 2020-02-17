import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { StatefulInput } from 'baseui/input';
import { Home, Error, TopBar, Recipe, Recipes } from './app';
import useApp from './domain/use-app';
import './init-firebase';
import getTheme from './scss/theme';
import './scss/main.scss';

const engine = new Styletron();

const App: React.FC<{}> = () => {
  const [state, dispatch] = useApp();

  let currentMainComponent;
  switch (state.router.currentRoute) {
    case 'HOME':
      currentMainComponent = <Home state={state} dispatch={dispatch} />;
      break;
    case 'RECIPES':
      currentMainComponent = <Recipes />;
      break;
    case 'RECIPE':
    // currentMainComponent = <Recipe recipe={null} />;
    // break;
    case 'NEW_RECIPE':
    case false:
    default:
      currentMainComponent = <Error errorCode={404} />;
      break;
  }

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={getTheme(state.theme.suite)}>
        <div className="content-panel">{currentMainComponent}</div>
      </BaseProvider>
    </StyletronProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
