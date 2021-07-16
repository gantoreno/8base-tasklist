import { compose } from 'recompose';

import { Card, Caption } from 'ui-neumorphism';

import TasklistTitle from './components/TasklistTitle';
import TasklistSection from './components/TasklistSection';
import TasklistCreator from './components/TasklistCreator';
import TasklistItems from './components/TasklistItems';

import {
  withTasks,
  withCreateTask,
  withUpdateTask,
  withDeleteTask,
  withToggleCompletedTask,
} from '../../shared/graphql';

import './Tasklist.css';

/**
 * Tasklist component - renders a tasklist and its elements
 *
 * @param {Number} count the amount of existing tasks
 * @param {Array} tasks the existing tasks
 * @param {Function} createTask function to create a task
 * @param {Function} updateTask function to update a task
 * @param {Function} deleteTask function to delete a task
 * @param {Function} toggleCompletedTask function to toggle a task's completed status
 * @returns {JSX.Element}
 */
const Tasklist = ({
  count,
  tasks,
  createTask,
  updateTask,
  deleteTask,
  toggleCompletedTask,
}) => {
  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <Card className="tasklist-card">
      <TasklistTitle testID="title">Tasklist</TasklistTitle>
      <TasklistSection title="Create a task">
        <TasklistCreator createTask={createTask} />
      </TasklistSection>
      <TasklistSection title="Summary">
        <Caption secondary>
          <span className="success">{completedTasks.length}</span> completed,{' '}
          <span className="error">{pendingTasks.length}</span> pending, for a
          total of <span className="primary">{count}</span> tasks
        </Caption>
      </TasklistSection>
      <TasklistSection title="Pending tasks">
        <TasklistItems
          tasks={pendingTasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleCompletedTask={toggleCompletedTask}
        />
      </TasklistSection>
      <TasklistSection title="Completed tasks">
        <TasklistItems
          tasks={completedTasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleCompletedTask={toggleCompletedTask}
        />
      </TasklistSection>
    </Card>
  );
};

export default compose(
  withTasks,
  withCreateTask,
  withUpdateTask,
  withDeleteTask,
  withToggleCompletedTask,
)(Tasklist);
