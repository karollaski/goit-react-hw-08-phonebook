import { selectError, selectIsLoading } from 'redux/contactc/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactc/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error ? <p>Loading...</p> : <ContactList />}
      </div>
    </div>
  );
};
export default Contacts;
