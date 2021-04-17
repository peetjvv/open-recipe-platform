import * as React from 'react';
import { Route, routeDefinitions } from '../../domain/router';
import { dispatchNavigate } from 'react-elmish-router';
import { Dispatch } from 'react-use-elmish';
import { Action } from '../../domain/types';

const Link: React.FC<{
  dispatch: Dispatch<Action>;
  to: Route;
  payload?: { [key: string]: string };
  pushHistory?: boolean;
  children: React.ReactNode;
}> = (props) => {
  const { dispatch, to, children, payload = {}, pushHistory = true } = props;

  return (
    <a
      href={routeDefinitions[to]}
      onClick={(e: React.MouseEvent) => {
        e && e.preventDefault && e.preventDefault();
        dispatchNavigate<Route>(to, pushHistory, payload, dispatch);
      }}
    >
      {children}
    </a>
  );
};

export default Link;
