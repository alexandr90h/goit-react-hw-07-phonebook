// import { v4 as uuidv4 } from 'uuid';
import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequuest = createAction('contacts/fetchContactsRequuest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactsRequuest = createAction('contacts/addContactsRequuest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

const delContactsRequuest = createAction('contacts/delContactsRequuest');
const delContactsSuccess = createAction('contacts/delContactsSuccess');
const delContactsError = createAction('contacts/delContactsError');

const filterContactsRequuest = createAction('contacts/filterContactsRequuest');
const filterContactsSuccess = createAction('contacts/filterContactsSuccess');
const filterContactsError = createAction('contacts/filterContactsError');

const filterChange = createAction('contacts/changeFilter');

const contactsAction = {
    fetchContactsRequuest, fetchContactsSuccess, fetchContactsError, addContactsRequuest,
    addContactsSuccess, addContactsError, delContactsRequuest, delContactsSuccess, delContactsError, filterContactsRequuest,
    filterContactsSuccess,filterContactsError,filterChange,
}
export default contactsAction;
