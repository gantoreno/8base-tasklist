import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import TasklistTitle from './TasklistTitle';

describe('TasklistTitle', () => {
  const title = 'This is a test title';

  it('renders without crashing', () => {
    render(<TasklistTitle>{title}</TasklistTitle>);
  });

  it('displays title correctly', () => {
    const component = render(<TasklistTitle>{title}</TasklistTitle>);

    expect(component.getByText(title)).toBeVisible();
  });
});
