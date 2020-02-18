import * as React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { Button } from 'baseui/button';
import { Dispatch } from 'react-use-elmish';
import { Action } from '../../domain/types';
import { useThemedStyletron } from '../../scss/theme';
import Link from '../components/link';

const TopBar: React.FC<{ dispatch: Dispatch<Action> }> = props => {
  const { dispatch } = props;

  const [css, theme] = useThemedStyletron();

  return (
    <HeaderNavigation>
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
          <Button>Get started</Button>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
};

export default TopBar;
