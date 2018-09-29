import {BrowserRouter, Route} from 'inferno-router';
import {connect} from '@cerebral/inferno';
import {state} from 'cerebral/lib/tags';

import Header from '../Header';
import routes from './routes';
import AuthenticatedRoute from './AuthenticatedRoute';
import NotAuthenticatedRoute from './NotAuthenticatedRoute';


export default connect({
  authenticated: state`authenticated`
}, ({authenticated: isCurrentlyAuthenticated}) => (
  <BrowserRouter>
    <div>
      <Header/>
      <hr/>
      {routes.map(({exact, path, component, authenticated}) => {
        if (authenticated === undefined)
          return <Route
            exact={exact}
            path={path}
            component={component}
          />;
        else if (authenticated === true)
          return <AuthenticatedRoute
            exact={exact}
            path={path}
            component={component}
            authenticated={isCurrentlyAuthenticated}
          />;
        else return <NotAuthenticatedRoute
            exact={exact}
            path={path}
            component={component}
            authenticated={isCurrentlyAuthenticated}
          />;
      })}
    </div>
  </BrowserRouter>
));
