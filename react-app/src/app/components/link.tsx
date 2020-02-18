import * as React from 'react';
import { Link as ElmishLink } from 'react-elmish-router/dist/components';
import { StyledLink } from 'baseui/link';
import { Route } from '../../domain/router';
import { useStyletron } from '../../scss/theme';
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

  return (
    <StyledLink>
      {/* TODO: fix style not showing when no href is provided. also, show link for href in bottom right popup thingy */}
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
