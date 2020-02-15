import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './app/home';
import useApp from './domain/use-app';
import './scss/main.scss';

const App: React.FC<{}> = () => {
  const [state, dispatch] = useApp();

  return <Home state={state} dispatch={dispatch} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
