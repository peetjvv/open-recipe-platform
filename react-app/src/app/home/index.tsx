import * as React from 'react';
import { Dispatch } from 'react';
import { State, AllActions } from '../../data';
import './style.scss';

const Home: React.FC<{
  state: State;
  dispatch: Dispatch<AllActions>;
}> = props => {
  const { state, dispatch } = props;

  return (
    <div className="home">
      <p>State: {JSON.stringify(state)}</p>
    </div>
  );
};

export default Home;
