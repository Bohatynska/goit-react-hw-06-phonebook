import React from 'react';
import { getFilter, getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { ContactWrap, ContactUl } from './ContactList.styled';
import ContactListItem from 'Components/ContactItem/ContactItem';
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedValue = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedValue)
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ContactWrap>
      <ContactUl>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} name={name} number={number} id={id} />
        ))}
      </ContactUl>
    </ContactWrap>
  );
};

export default ContactList;
