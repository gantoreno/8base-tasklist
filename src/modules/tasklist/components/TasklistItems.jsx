import {
  Card,
  CardContent,
  Caption,
  Checkbox,
  Subtitle2,
  IconButton,
} from 'ui-neumorphism';
import { Icon } from '@mdi/react';
import { mdiPen, mdiTrashCan } from '@mdi/js';

import './TasklistItems.css';

/**
 * Tasklist item component - renders a tasklist item and its control buttons
 *
 * @param {Object} task the task data
 * @param {Boolean} separated wether it should apply a bottom margin to separate from other items
 * @param {Function} updateTask function to update a task
 * @param {Function} deleteTask function to delete a task
 * @param {Function} toggleCompletedTask function to toggle a task's completed status
 * @returns {JSX.Element}
 */
const TasklistItem = ({
  task,
  separated,
  updateTask,
  deleteTask,
  toggleCompletedTask,
}) => {
  const { id, name, completed, createdAt } = task;

  return (
    <div
      className={
        'tasklist-item' +
        (separated ? ' tasklist-item-separated' : '') +
        (completed ? ' tasklist-item-completed' : '')
      }>
      <div className="tasklist-item-checkbox">
        <Checkbox
          color="var(--primary)"
          checked={completed}
          onChange={() => toggleCompletedTask({ id, completed: !completed })}
        />
      </div>
      <div className="tasklist-item-content">
        <Subtitle2 className="tasklist-item-title">
          {completed ? <del>{name}</del> : name}
        </Subtitle2>
        <Caption secondary>
          Added on {new Date(createdAt).toDateString()}
        </Caption>
      </div>
      <div className="tasklist-item-actions">
        <IconButton
          text={false}
          color="var(--warning)"
          onClick={() => updateTask({ id, name })}
          disabled={completed}
          className="tasklist-item-actions-edit"
          rounded>
          <Icon path={mdiPen} size={0.8} />
        </IconButton>
        <IconButton
          text={false}
          color="var(--error)"
          onClick={() => deleteTask(id)}
          className="tasklist-item-actions-delete"
          rounded>
          <Icon path={mdiTrashCan} size={0.8} />
        </IconButton>
      </div>
    </div>
  );
};

/**
 * Tasklist items component - renders all existing tasks
 *
 * @param {Array} tasks the existing tasks
 * @param {Function} updateTask function to update a task
 * @param {Function} deleteTask function to delete a task
 * @param {Function} toggleCompletedTask function to toggle a task's completed status
 * @returns {JSX.Element}
 */
const TasklistItems = ({
  tasks,
  updateTask,
  deleteTask,
  toggleCompletedTask,
}) => {
  return (
    <Card className="tasklist-card-list">
      <CardContent>
        {tasks.length > 0 ? (
          tasks.map((task, i) => (
            <TasklistItem
              key={task.id}
              task={task}
              separated={i < tasks.length - 1}
              updateTask={updateTask}
              deleteTask={deleteTask}
              toggleCompletedTask={toggleCompletedTask}
            />
          ))
        ) : (
          <Caption className="tasklist-card-empty-text" secondary>
            Nothing here...
          </Caption>
        )}
      </CardContent>
    </Card>
  );
};

export default TasklistItems;
