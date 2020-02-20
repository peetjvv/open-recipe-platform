import * as React from 'react';
import { Link as ElmishLink } from 'react-elmish-router/dist/components';
import { StyledLink } from 'baseui/link';
import { Route, routeDefinitions } from '../../domain/router';
import { useThemedStyletron } from '../../scss/theme';
import { Dispatch } from 'react-use-elmish';
import { Action } from '../../domain/types';

const Link: React.FC<{
  dispatch: Dispatch<Action>;
  to: Route;
  payload?: { [key: string]: string };
  pushHistory?: boolean;
  children: React.ReactNode;
}> = props => {
  const { dispatch, to, children, payload = {}, pushHistory = true } = props;

  const [css, theme] = useThemedStyletron();

  return (
    <StyledLink
      href={routeDefinitions[to]}
      onClick={(e: React.MouseEvent) =>
        e && e.preventDefault && e.preventDefault()
      }
    >
      <ElmishLink
        dispatch={dispatch}
        route={to}
        match={payload}
        pushHistory={pushHistory}
      >
        {children}
      </ElmishLink>
    </StyledLink>
  );
};

export default Link;
