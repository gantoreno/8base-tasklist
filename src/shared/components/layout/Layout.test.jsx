import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import Layout from './Layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    render(<Layout>Test</Layout>);
  });
});
