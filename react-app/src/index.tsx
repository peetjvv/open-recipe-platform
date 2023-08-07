import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import './firebase';
import App from './app';
import { getCurrentEnvironment, isLocalEnvironment } from './util/environment';

Sentry.init({
  dsn: process.env.SENTRY_CLIENT_KEY,
  environment: getCurrentEnvironment(),
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // Sentry recommends adjusting this value in production
  tracesSampleRate: 1.0,

  // TODO: set up versioning for sentry
  // release: "open-recipe-platform@" + process.env.npm_package_version,

  beforeSend: (e: any) => {
    if (isLocalEnvironment) {
      return null;
    }
    return e;
  },
});

ReactDOM.render(<App />, document.getElementById('app'));
