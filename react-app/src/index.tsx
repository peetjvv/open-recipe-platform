import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home, FourOhFour } from './app';
import useApp from './domain/use-app';
import { throwIfNotNever } from './util/typescript';
import './scss/main.scss';

const App: React.FC<{}> = () => {
  const [state, dispatch] = useApp();

  let currentMainComponent;
  switch (state.router.currentRoute) {
    case 'HOME':
      currentMainComponent = <Home state={state} dispatch={dispatch} />;
      break;
    case false:
    default:
      currentMainComponent = <FourOhFour />;
      break;
  }

  return currentMainComponent;
};

ReactDOM.render(<App />, document.getElementById('app'));
