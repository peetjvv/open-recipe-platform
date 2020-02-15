import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import * as FaBrandIcons from '@fortawesome/free-brands-svg-icons';

const App: React.FC<{}> = () => (
  <div className="greeting">
    <FontAwesomeIcon icon={FaBrandIcons.faReact} />
    Start building your React app here!
    <FontAwesomeIcon icon={FaBrandIcons.faReact} />
  </div>
);

export default App;
