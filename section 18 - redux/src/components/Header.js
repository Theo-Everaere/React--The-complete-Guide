import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const logoutHandler = (e) => {
    e.preventDefault()
    console.log('logout clicked');

    dispatch(authActions.logout())
  }

  const isAuthNav = <nav>
    <ul>
      <li>
        <a href='/'>My Products</a>
      </li>
      <li>
        <a href='/'>My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  </nav>

  const isNotAuthNav = <nav>
    <ul>
      <li>
        <button>Login</button>
      </li>
    </ul>
  </nav>

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {!isAuthenticated && isNotAuthNav}
      {isAuthenticated && isAuthNav}
    </header>
  );
};

export default Header;
