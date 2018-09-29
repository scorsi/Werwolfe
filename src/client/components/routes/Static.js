import {StaticRouter, Switch, Route, Link} from 'inferno-router';

import Header from '../Header';
import routes from "./routes";


export default ({context, location}) => (
  <StaticRouter context={context} location={location}>
    <div>
      <Header/>
      <hr/>
      <Switch>
        {routes.map(({exact, path, component}) => (
          <Route exact={exact} path={path} component={component}/>
        ))}
      </Switch>
    </div>
  </StaticRouter>
);
