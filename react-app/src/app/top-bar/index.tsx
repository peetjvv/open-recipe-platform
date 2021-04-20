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
    <div className="flex h-15 px-4 py-4 border-b border-black dark:border-white mb-4">
      <div className="flex-grow align-middle">
        <Link dispatch={dispatch} to="HOME">
          Open recipes
        </Link>
        <Link dispatch={dispatch} to="RECIPES">
          Recipes
        </Link>
      </div>

      <div className="align-middle">
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
