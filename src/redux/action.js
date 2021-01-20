// import { v4 as uuidv4 } from 'uuid';
import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequuest = createAction('contacts/fetchContactsRequuest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactsRequuest = createAction('contacts/addContactsRequuest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

const delContacts = createAction('contacts/dalete');
const filterChange = createAction('contacts/changeFilter');
const contactsAction={ delContacts, filterChange,fetchContactsRequuest,fetchContactsSuccess, fetchContactsError,addContactsRequuest,addContactsSuccess,addContactsError}
export default  contactsAction;