import { AppProvider as Provider } from '@8base/app-provider';

import { ENDPOINT_URI } from '../constants';

/**
 * App provider component - provides the 8Base Apollo configuration for connecting to the API
 *
 * @param {JSX.Element} loadingComponent component displayed during loading
 * @param {JSX.Element} renderComponent component displayed after loading
 * @returns {JSX.Element}
 */
const AppProvider = ({ loadingComponent, renderComponent, test }) => {
  return (
    <Provider uri={ENDPOINT_URI}>
      {({ loading }) => (loading ? loadingComponent() : renderComponent())}
    </Provider>
  );
};

export default AppProvider;
