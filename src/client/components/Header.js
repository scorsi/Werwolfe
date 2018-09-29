import {Link} from 'inferno-router';


export default () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/logout">Logout</Link></li>
    <li><Link to="/lobbies">Lobbies</Link></li>
  </ul>
);
