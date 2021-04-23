import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import * as FaBrandIcons from '@fortawesome/free-brands-svg-icons';
import { Dispatch } from 'react-use-elmish';
import { State, Action } from '../../domain/types';
import './style.scss';

const Home: React.FC<{
  state: State;
  dispatch: Dispatch<Action>;
}> = props => {
  const { state, dispatch } = props;

  return (
    <div className="home">
      <p>State: {JSON.stringify(state)}</p>
    </div>
  );
};

export default Home;
