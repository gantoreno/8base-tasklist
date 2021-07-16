import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import AppProvider from '../../shared/8base/AppProvider';
import Tasklist from './TaskList';

describe('Tasklist', () => {
  it('renders without crashing', () => {
    render(<Tasklist />, {
      wrapper: AppProvider,
    });
  });
});
