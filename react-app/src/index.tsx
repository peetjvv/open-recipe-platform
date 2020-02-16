import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home, Error, TopBar } from './app';
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
      currentMainComponent = <Error errorCode={404} />;
      break;
  }

  return (
    <div className="content-panel">
      <TopBar>{currentMainComponent}</TopBar>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
