import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import * as FaBrandIcons from '@fortawesome/free-brands-svg-icons';
import { State, Action } from '../../domain/types';
import { addBar } from '../../domain/foo/action-creators';
import vars from '../../scss/vars';
import './style.scss';

const Home: React.FC<{
  state: State;
  dispatch: React.Dispatch<Action>;
}> = props => {
  const { state, dispatch } = props;

  return (
    <div className="home" onClick={e => dispatch(addBar())}>
      <FontAwesomeIcon icon={FaBrandIcons.faReact} />{' '}
      <p>
        Start building your React app here! - State: {JSON.stringify(state)}
      </p>
    </div>
  );
};

export default Home;
