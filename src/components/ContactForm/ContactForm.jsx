import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: name,
      phone: number,
    };

    const isInContacts = contacts.some(
      ({ name }) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    console.log(contact);
    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          className={css.form__input}
          type="text"
          name="name"
          value={name}
          id={nameInputId}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor={numberInputId}>
        Number
        <input
          className={css.form__input}
          type="tel"
          name="number"
          value={number}
          id={numberInputId}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.form__btn} type="submit">
        Add contact{' '}
      </button>
    </form>
  );
};

export default ContactForm;
