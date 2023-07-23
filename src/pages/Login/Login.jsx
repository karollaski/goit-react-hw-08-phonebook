import LoginForm from 'components/LoginForm/LoginForm';
import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
