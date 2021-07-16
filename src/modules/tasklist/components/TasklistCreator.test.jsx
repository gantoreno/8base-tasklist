import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import TasklistCreator from './TasklistCreator';

describe('TasklistCreator', () => {
  it('renders without crashing', () => {
    render(<TasklistCreator createTask={jest.fn()} />);
  });

  it('displays placeholder and button', () => {
    const component = render(<TasklistCreator createTask={jest.fn()} />);

    const textInput = component.container.querySelector('input');
    const submitButton = component.container.querySelector('button');

    expect(textInput).toBeVisible();
    expect(submitButton).toBeVisible();
  });

  it('creates a task', () => {
    const testValue = 'Test task';
    const createTask = jest.fn();

    const component = render(<TasklistCreator createTask={createTask} />);

    const textInput = component.container.querySelector('input');
    const submitButton = component.container.querySelector('button');

    userEvent.type(textInput, testValue);
    userEvent.click(submitButton);

    expect(component.queryByDisplayValue(testValue)).not.toBeInTheDocument();
    expect(createTask).toHaveBeenCalledTimes(1);
  });
});
