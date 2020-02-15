import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './app/home';
import './scss/main.scss';

const App: React.FC<{}> = props => {
  const {} = props;

  return <Home routingPage={'HOME'} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
