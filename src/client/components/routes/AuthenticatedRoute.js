import {Route, Redirect} from 'inferno-router';


export default ({exact, path, component: Component, authenticated}) => (
  <Route
    exact={exact}
    path={path}
    render={props => authenticated === false ? <Redirect to="/login"/> : <Component {...props} />}
  />
);
