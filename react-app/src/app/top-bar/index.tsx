import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import { Dispatch } from 'react-use-elmish';
import { Action, State } from '../../domain/types';
import Link from '../components/link';
import { navigateEffect, dispatchNavigate } from 'react-elmish-router';
import { Route } from '../../domain/router';

const options = {
  options: [
    { id: 'AliceBlue', color: '#F0F8FF' },
    { id: 'AntiqueWhite', color: '#FAEBD7' },
    { id: 'Aqua', color: '#00FFFF' },
  ],
  labelKey: 'id',
  valueKey: 'color',
};

const TopBar: React.FC<{
  state: State;
  dispatch: Dispatch<Action>;
}> = (props) => {
  const { state, dispatch } = props;

  return (
    <div>
      <Link dispatch={dispatch} to="HOME">
        Open recipes
      </Link>
      <Link dispatch={dispatch} to="RECIPES">
        Recipes
      </Link>
      <button
        onClick={() =>
          dispatchNavigate<Route>('NEW_RECIPE', false, {}, dispatch)
        }
      >
        <FontAwesomeIcon icon={FaSolidIcons.faPlus} /> New recipe
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'THEME',
            subtype: 'SET_THEME_SUITE',
            payload: state.theme.suite === 'LIGHT' ? 'DARK' : 'LIGHT',
          })
        }
      >
        <FontAwesomeIcon icon={FaSolidIcons.faLightbulb} />
      </button>
      <input
        // {...options}
        placeholder="Search recipes…"
        type="search"
        // getOptionLabel={props =>
        //   props.option && props.option.id ? props.option.id : null
        // }
        onChange={() => {}}
      />
    </div>
  );
};

export default TopBar;
