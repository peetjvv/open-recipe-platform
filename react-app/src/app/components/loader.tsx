import * as React from 'react';

const Loader: React.FC<{
  isLoading?: boolean;
  loadingText?: string;
  children?: React.ReactNode;
}> = props => {
  const {
    isLoading = true,
    loadingText = 'Loading...',
    children = <div />,
  } = props;

  return <>{isLoading ? <div>{loadingText}</div> : children}</>;
};

export default Loader;
