import * as React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import { Anchor } from '../../../src/app/components';

const expectedLinkText = 'link';
const expectedHref = 'https://peetjvv.co.za/';

const setup = () => {
  const utils = render(<Anchor href={expectedHref}>{expectedLinkText}</Anchor>);
  const anchor = utils.getByText(expectedLinkText);
  return { anchor, ...utils };
};

test('should have expected text', () => {
  const { anchor } = setup();
  expect(anchor.textContent).toBe(expectedLinkText);
});

test('should have expected href', () => {
  const { anchor } = setup();
  expect(anchor.hasAttribute('href')).toBe(true);
  expect(anchor.getAttribute('href')).toBe(expectedHref);
});
