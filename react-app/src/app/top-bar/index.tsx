import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import { Dispatch } from 'react-use-elmish';
import { Action } from '../../domain/types';
import { Link, Toggle } from '../components';
import { navigateEffect, dispatchNavigate } from 'react-elmish-router';
import { Route } from '../../domain/router';
import { ThemeSuite } from '../../domain/theme';

const TopBar: React.FC<{
  themeSuite: ThemeSuite;
  dispatch: Dispatch<Action>;
}> = props => {
  const { themeSuite, dispatch } = props;

  return (
    <div className="top-bar flex h-15 px-4 py-4 rounded-lg mb-4 bg-white dark:bg-grey-dark bg-opacity-95 dark:bg-opacity-5">
      <div className="left flex-grow align-middle">
        <Link dispatch={dispatch} to="HOME">
          Open recipes
        </Link>
        <Link dispatch={dispatch} to="RECIPES">
          Recipes
        </Link>
      </div>

      <div className="right flex">
        <button
          onClick={() =>
            dispatchNavigate<Route>('NEW_RECIPE', false, {}, dispatch)
          }
        >
          <FontAwesomeIcon icon={FaSolidIcons.faPlus} />
        </button>
        <Toggle
          value={themeSuite === 'DARK'}
          onChange={() =>
            dispatch({
              type: 'THEME',
              subtype: 'SET_THEME_SUITE',
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
