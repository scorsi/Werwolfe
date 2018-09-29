import {BrowserRouter, Route, Link} from 'inferno-router';

import Header from '../Header';
import routes from './routes';


export default () => (
  <BrowserRouter>
    <div>
      <Header/>
      <hr/>
      {routes.map(({exact, path, component}) => (
        <Route exact={exact} path={path} component={component}/>
      ))}
    </div>
  </BrowserRouter>
);
