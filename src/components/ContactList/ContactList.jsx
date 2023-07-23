import React from 'react';
import css from './ContactList.module.css';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contactc/selectors';
import { deleteContact } from 'redux/contactc/operations';
import { editContact } from 'redux/contactc/editContactSlice';
import EditContact from 'components/EditContact/EditContact';

const ContactList = () => {
  const [showModal, setShowModal] = useState(false);

  // const isShowModal = () => setShowModal(true);

  const onCloseModal = () => setShowModal(false);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  const handleEdit = contactId => {
    dispatch(editContact(contactId));
    setShowModal(true);
  };

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts &&
        visibleContacts.map(contact => (
          <li className={css.contactList__item} key={contact.id}>
            <span>{contact.name + ': ' + contact.number}</span>
            <div className={css.btnWrapper}>
              <button
                className={css.contactList__btn}
                type="button"
                name="delete"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
              <button
                className={css.contactList__btn}
                type="button"
                name="edit"
                onClick={() => handleEdit(contact.id)}
              >
                Edit
              </button>
            </div>
            {showModal ? <EditContact onClose={onCloseModal} /> : null}
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
