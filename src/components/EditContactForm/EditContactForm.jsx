import { nanoid } from 'nanoid';
import css from './EditContactForm.module.css';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'redux/contactc/selectors';
import { selectEditContact } from 'redux/contactc/selectors';
import { updateContact } from 'redux/contactc/operations';

const EditContactForm = () => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const contactEditId = useSelector(selectEditContact);

  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setNewName(value);
    }

    if (name === 'number') {
      setNewNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: contactEditId,
      name: newName,
      number: newNumber,
    };

    dispatch(updateContact(contact));
    setNewName('');
    setNewNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          className={css.form__input}
          type="text"
          name="name"
          value={newName}
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
          value={newNumber}
          id={numberInputId}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.form__btn} type="submit">
        Confirm
      </button>
    </form>
  );
};

export default EditContactForm;
