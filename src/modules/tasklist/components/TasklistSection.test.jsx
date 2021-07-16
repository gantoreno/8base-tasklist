import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import TasklistSection from './TasklistSection';

describe('TasklistSection', () => {
  const section = { title: 'Test section', content: 'This is a test section' };

  it('renders without crashing', () => {
    render(
      <TasklistSection title={section.title}>
        {section.content}
      </TasklistSection>,
    );
  });

  it('renders the title and content correctly', () => {
    const component = render(
      <TasklistSection title={section.title}>
        {section.content}
      </TasklistSection>,
    );

    expect(component.getByText(section.title)).toBeVisible();
    expect(component.getByText(section.content)).toBeVisible();
  });
});
