import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {
  ContactItem,
  Name,
  Number,
  DeleteButton,
} from 'Components/ContactItem/ContactItem.styled';
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <ContactItem>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <DeleteButton type="button" onClick={onDelete}>
        Delete contact
      </DeleteButton>
    </ContactItem>
  );
};
export default ContactListItem;
