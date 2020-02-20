import * as React from 'react';
import { StyledLink } from 'baseui/link';
import { Route, routeDefinitions } from '../../domain/router';
import { useThemedStyletron } from '../../scss/theme';
import { Dispatch } from 'react-use-elmish';
import { Action } from '../../domain/types';
import { dispatchNavigate } from 'react-elmish-router';

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
      onClick={(e: React.MouseEvent) => {
        e && e.preventDefault && e.preventDefault();
        dispatchNavigate<Route>(to, pushHistory, payload, dispatch);
      }}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
