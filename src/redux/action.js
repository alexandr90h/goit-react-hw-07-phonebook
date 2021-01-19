import { v4 as uuidv4 } from 'uuid';
import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequuest = createAction('contacts/fetchContactsRequuest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContacts = createAction('contacts/add', (name, number) => {
    return {
        payload: {
        id: uuidv4(),
        name,
        number,
    }}
});
const delContacts = createAction('contacts/dalete');
const filterChange = createAction('contacts/changeFilter');
const contactsAction={ addContacts, delContacts, filterChange,fetchContactsRequuest,fetchContactsSuccess, fetchContactsError}
export default  contactsAction;