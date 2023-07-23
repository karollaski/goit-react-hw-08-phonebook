import { useEffect } from 'react';
import css from './EditContact.module.css';
import EditContactForm from 'components/EditContactForm/EditContactForm';

const EditContact = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const onCloseModal = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div onClick={onCloseModal} className={css.overlay}>
      <div className={css.modal}>
        <div className={css.wrapper}>
          <h2>Edit contact</h2>
          <EditContactForm />
        </div>
      </div>
    </div>
  );
};

export default EditContact;
