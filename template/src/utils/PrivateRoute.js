import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect({
        appState: { targetUrl: window.location.pathname },
      });
    }
  }, [isAuthenticated, loginWithRedirect, path]);

  return (
    <Route
      path={path}
      {...rest}
      render={(props) =>
        isAuthenticated === true ? <Component {...props} /> : null
      }
    />
  );
}
export default PrivateRoute;