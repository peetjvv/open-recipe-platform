import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { Primitive } from '@sentry/types';
import { RoutePaths } from '../routes';

const ErrorBoundaryFallback: React.FC<{
  error: Error;
  componentStack: string | null;
  resetError: () => void;
}> = ({ error, componentStack, resetError }) => (
  <div className="bg-white dark:bg-grey-dark m-4">
    <h1>Something went wrong</h1>
    <p>{error.toString()}</p>
    <p>{componentStack}</p>
    <button onClick={() => resetError()}>Try to recover</button>
    <Link to={RoutePaths.HOME}>Reload</Link>
  </div>
);

const ErrorBoundary: React.FC<{
  children: React.ReactNode;
  showDialog?: boolean;
  dialogOptions?: Sentry.ReportDialogOptions;
  tags?: { [key: string]: Primitive };
}> = props => {
  const { children, showDialog = true, dialogOptions = {}, tags = {} } = props;

  return (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <ErrorBoundaryFallback
          error={error}
          componentStack={componentStack}
          resetError={resetError}
        />
      )}
      showDialog={showDialog}
      dialogOptions={{
        title: 'Something went wrong',
        ...dialogOptions,
        user: {
          name: undefined, // TODO: pull name from auth
          email: undefined, // TODO: pull email from auth
          ...(dialogOptions.user || {}),
        },
      }}
      beforeCapture={scope => {
        if (!!tags) {
          scope.setTags(tags);
        }
        // TODO: add auth details to scope
        // TODO: add tag for recipeId if any
      }}
    >
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default ErrorBoundary;
