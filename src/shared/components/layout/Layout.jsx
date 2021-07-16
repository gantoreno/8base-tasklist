import './Layout.css';

/**
 * Layout components - uses flexbox to center elements
 *
 * @param {JSX.Element} children children component
 * @returns {JSX.Element}
 */
const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
