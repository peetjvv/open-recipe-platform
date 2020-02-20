import * as React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { Button, KIND, SHAPE } from 'baseui/button';
import { StatefulSelect as Search, TYPE } from 'baseui/select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/free-solid-svg-icons';
import { Dispatch } from 'react-use-elmish';
import { Action, State } from '../../domain/types';
import { useThemedStyletron } from '../../scss/theme';
import Link from '../components/link';

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
}> = props => {
  const { state, dispatch } = props;

  const [css, theme] = useThemedStyletron();

  return (
    <HeaderNavigation overrides={{ Root: { style: { padding: '0px 32px' } } }}>
      {/* TODO: set padding in theme */}
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <Link dispatch={dispatch} to="HOME">
            Open recipes
          </Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Link dispatch={dispatch} to="NEW_RECIPE">
            New recipe
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link dispatch={dispatch} to="RECIPES">
            Recipes
          </Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Button
            kind={KIND.tertiary}
            shape={SHAPE.round}
            onClick={() =>
              dispatch({
                type: 'THEME',
                subtype: 'SET_THEME_SUITE',
                payload: state.theme.suite === 'LIGHT' ? 'DARK' : 'LIGHT',
              })
            }
          >
            <FontAwesomeIcon icon={FaSolidIcons.faLightbulb} />
          </Button>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.right}>
        <NavigationItem style={{ width: '200px' }}>
          <Search
            {...options}
            placeholder="Search recipes…"
            maxDropdownHeight="300px"
            type={TYPE.search}
            // getOptionLabel={props =>
            //   props.option && props.option.id ? props.option.id : null
            // }
            onChange={() => {}}
          />
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
};

export default TopBar;
