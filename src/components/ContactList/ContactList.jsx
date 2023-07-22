import React from 'react';
import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts &&
        visibleContacts.map(contact => (
          <li className={css.contactList__item} key={contact.id}>
            {contact.name + ': ' + contact.phone}
            <button
              className={css.contactList__btn}
              type="button"
              name="delete"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
