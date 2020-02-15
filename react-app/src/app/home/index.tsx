import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import * as FaBrandIcons from '@fortawesome/free-brands-svg-icons';
import { Route } from '../../domain/types';

const Home: React.FC<{ routingPage: Route }> = props => {
  const { routingPage } = props;
  return (
    <div className="home">
      <FontAwesomeIcon icon={FaBrandIcons.faReact} /> Start building your React
      app here! - You're on page '{routingPage}'
    </div>
  );
};

export default Home;
