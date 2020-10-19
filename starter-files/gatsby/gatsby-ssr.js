import React from 'react';
import Layout from './src/components/Layout';

// Allow a plugin to wrap the page element.
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}
