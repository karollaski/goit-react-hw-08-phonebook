import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './Register.module.css';

const Register = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Registration</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
