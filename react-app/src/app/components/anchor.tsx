import * as React from 'react';

const Anchor: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
  }
> = props => {
  const { children, ...anchorProps } = props;
  return (
    <a
      {...anchorProps}
      className={`${anchorProps.className} underline hover:text-grey-dark dark:hover:text-white`}
    >
      {children}
    </a>
  );
};

export default Anchor;
