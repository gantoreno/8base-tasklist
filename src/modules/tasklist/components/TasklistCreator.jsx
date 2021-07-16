import { useState } from 'react';
import { isValidString } from '@cobuildlab/validation-utils';

import { Icon } from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { TextField, IconButton } from 'ui-neumorphism';

import './TasklistCreator.css';

/**
 * Tasklist creator component - provides inputs for creating a task
 *
 * @param {Function} createTask function to create a task
 * @returns {JSX.Element}
 */
const TasklistCreator = ({ createTask }) => {
  const [name, setName] = useState('');

  return (
    <div className="tasklist-creator">
      <TextField
        value={name}
        label="E.g. Take out laundry"
        onChange={(evt) => {
          setName(evt.value);
        }}
        className="tasklist-creator-input"
        hideExtra
        uncontrolled
      />
      <IconButton
        text={false}
        color="var(--primary)"
        className="tasklist-creator-button"
        disabled={!isValidString(name, false)}
        onClick={() => {
          createTask({ name });
          setName('');
        }}
        rounded>
        <Icon path={mdiPlus} size={0.8} />
      </IconButton>
    </div>
  );
};

export default TasklistCreator;
