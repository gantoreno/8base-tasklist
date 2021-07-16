import { CardContent, Subtitle1 } from 'ui-neumorphism';

import './TasklistSection.css';

/**
 * Tasklist section component - creates a custom section
 *
 * @param {String} title the section title
 * @param {JSX.Element} children children component
 * @returns {JSX.Element}
 */
const TasklistSection = ({ title, children }) => {
  return (
    <CardContent>
      <Subtitle1 className="tasklist-card-section-title" secondary>
        {title}
      </Subtitle1>
      {children}
    </CardContent>
  );
};

export default TasklistSection;
