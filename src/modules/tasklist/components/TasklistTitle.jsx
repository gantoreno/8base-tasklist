import { CardHeader, H4 } from 'ui-neumorphism';

import './TasklistTitle.css';
/**
 * Tasklist title component - creates the title for the tasklist
 *
 * @param {JSX.Element} children children component
 * @returns {JSX.Element}
 */
const TasklistTitle = ({ children }) => {
  return (
    <CardHeader>
      <H4 className="tasklist-card-section-title" secondary>
        {children}
      </H4>
    </CardHeader>
  );
};

export default TasklistTitle;
