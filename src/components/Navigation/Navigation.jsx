import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link className={css.link} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className={css.link} to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
