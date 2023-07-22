import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};
export default Home;
