import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import * as FaBrandIcons from '@fortawesome/free-brands-svg-icons';
import { State, Action } from '../../domain/types';

const Home: React.FC<{
  state: State;
  dispatch: React.Dispatch<Action>;
}> = props => {
  const { state, dispatch } = props;

  return (
    <div
      className="home"
      onClick={e => dispatch({ type: 'FOO', subtype: 'ADD_R' })}
    >
      <FontAwesomeIcon icon={FaBrandIcons.faReact} /> Start building your React
      app here! - State: {JSON.stringify(state)}
    </div>
  );
};

export default Home;
