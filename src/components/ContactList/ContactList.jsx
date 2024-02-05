import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, phone }) => (
      <li key={id} className={s.item}>
        {name} : {phone}
        <button className={s.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
