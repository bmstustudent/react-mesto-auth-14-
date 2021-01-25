import React from 'react';
import Popup from './Popup';

function PopupWithForm({ name, isOpen, onClose, onSubmit, title, handleSubmit, children, className }) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      name={name}
      onSubmit={handleSubmit}
      action="#"
    >
      <form
        className={`popup__form form_type_${name}`}
        name={name}
        onSubmit={onSubmit}
        noValidate
      >
        <h2 className="popup__title">{title}</h2>
        {children}
      </form>
    </Popup >
  );
}

export default PopupWithForm;