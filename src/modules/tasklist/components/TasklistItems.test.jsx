import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TasklistItems from './TasklistItems';

describe('TasklistItems', () => {
  let props;

  beforeEach(() => {
    props = {
      tasks: [
        {
          name: 'Test task 1',
          completed: false,
        },
        {
          name: 'Test task 2',
          completed: true,
        },
        {
          name: 'Test task 3',
          completed: false,
        },
      ],
      updateTask: jest.fn(),
      deleteTask: jest.fn(),
      toggleCompletedTask: jest.fn(),
    };
  });

  it('renders without crashing', () => {
    render(<TasklistItems {...props} />);
  });

  it('contains all children', () => {
    const component = render(<TasklistItems {...props} />);

    const tasklistItems =
      component.container.querySelectorAll('.tasklist-item');

    expect(tasklistItems.length).toBe(props.tasks.length);
  });

  it('renders empty message', () => {
    const component = render(<TasklistItems {...props} tasks={[]} />);

    const tasklistItems =
      component.container.querySelectorAll('.tasklist-item');

    expect(tasklistItems.length).toBe(0);
    expect(component.getByText(/nothing here/i)).toBeVisible();
  });

  it('executes callbacks', () => {
    const component = render(<TasklistItems {...props} />);

    const tasklistItem = component.container.querySelector('.tasklist-item');

    const tasklistItemToggler = tasklistItem.querySelector('input');
    const taskListItemButtons = tasklistItem.querySelectorAll('button');

    userEvent.click(tasklistItemToggler);
    userEvent.click(taskListItemButtons[0]);
    userEvent.click(taskListItemButtons[1]);

    expect(props.toggleCompletedTask).toHaveBeenCalledTimes(1);
    expect(props.updateTask).toHaveBeenCalledTimes(1);
    expect(props.deleteTask).toHaveBeenCalledTimes(1);
  });
});
