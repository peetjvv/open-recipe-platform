import * as React from 'react';
import { useContext } from 'react';
import { Dispatch } from 'react';
import { State, AllActions } from '../../data';
import { AuthContext } from '../contexts/auth-context';
import './style.scss';

const Home: React.FC<{
  state: State;
  dispatch: Dispatch<AllActions>;
}> = props => {
  const { state, dispatch } = props;

  const { user } = useContext(AuthContext);

  return (
    <div className="home">
      <p>State: {JSON.stringify(state)}</p>
      <p>User: {JSON.stringify(user)}</p>
    </div>
  );
};

export default Home;
