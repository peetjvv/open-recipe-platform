import * as React from 'react';
import { Link } from 'react-router-dom';
import { Dispatch } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import { AllActions } from '../../data';
import { Toggle } from '../components';
import { ThemeSuite } from '../../data/theme';
import { RouteDefinitions } from '../routes';

const TopBar: React.FC<{
  themeSuite: ThemeSuite;
  dispatch: Dispatch<AllActions>;
}> = props => {
  const { themeSuite, dispatch } = props;

  return (
    <div className="top-bar flex h-15 px-4 py-4 rounded-lg mb-4 bg-white dark:bg-grey-dark bg-opacity-95 dark:bg-opacity-5">
      <div className="left flex-grow align-middle">
        <Link to={RouteDefinitions.HOME.path}>Open recipes</Link>
        <Link to={RouteDefinitions.RECIPES.path}>Recipes</Link>
      </div>

      <div className="right flex">
        <Link to={RouteDefinitions.NEW_RECIPE.path}>
          <FontAwesomeIcon icon={FaSolidIcons.faPlus} />
        </Link>
        <Toggle
          value={themeSuite === 'DARK'}
          onChange={() =>
            dispatch({
              type: 'THEME',
              subType: 'SET_THEME_SUITE',
              payload: themeSuite === 'LIGHT' ? 'DARK' : 'LIGHT',
            })
          }
          iconUnchecked={FaSolidIcons.faSun}
          iconChecked={FaSolidIcons.faUserNinja}
        />
        {/* <FontAwesomeIcon icon={FaSolidIcons.faLightbulb} /> */}
        <input
          placeholder="Search recipes …"
          type="search"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default TopBar;
