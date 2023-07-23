import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={css.link}
        style={({ isActive }) =>
          isActive
            ? {
                color: '#1290f7',
              }
            : { color: '#2a363b' }
        }
        to={'/register'}
      >
        Register
      </NavLink>
      <NavLink
        className={css.link}
        style={({ isActive }) =>
          isActive
            ? {
                color: '#1290f7',
              }
            : { color: '#2a363b' }
        }
        to={'/login'}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
