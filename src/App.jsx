import AppProvider from './shared/8base/AppProvider';
import Layout from './shared/components/layout/Layout';
import Tasklist from './modules/tasklist/Tasklist';

import { ProgressCircular } from 'ui-neumorphism';

import './App.css';

/**
 * Main app component
 *
 * @returns {JSX.Element}
 */
const App = () => {
  return (
    <Layout>
      <AppProvider
        loadingComponent={() => (
          <ProgressCircular
            size={64}
            width={4}
            color="var(--primary)"
            indeterminate
          />
        )}
        renderComponent={() => <Tasklist />}
      />
    </Layout>
  );
};

export default App;
