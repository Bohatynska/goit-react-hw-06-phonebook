import { Container } from 'Components/App/App.styled';
// import React, { useState, useEffect } from 'react';
// import {
//   basicContacts,
//   getFromLocalStorage,
//   setToLocalStorage,
// } from 'Components/services/localStorage';
import PhonebookForm from '../PhonebookForm/PhonebookForm';
import ContactList from '../ContactList/ContactList.jsx';
import Filter from '../Filter/Filter';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
export default App;
