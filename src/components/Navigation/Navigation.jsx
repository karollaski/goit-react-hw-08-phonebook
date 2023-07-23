import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        className={css.link}
        style={({ isActive }) =>
          isActive
            ? {
                color: '#1290f7',
              }
            : { color: '#2a363b' }
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.link}
          style={({ isActive }) =>
            isActive
              ? {
                  color: '#1290f7',
                }
              : { color: '#2a363b' }
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
