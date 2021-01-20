import contactsAction from "./action";
import * as API from '../api/api'
import { v4 as uuidv4 } from 'uuid';


export const fetchContacts = () => async dispatch => {
    dispatch(contactsAction.fetchContactsRequuest);
    try {
        const contacts = await API.fetchContacts();
        dispatch(contactsAction.fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsAction.fetchContactsError(error.message))
    }
}
export const addContacts = (name, number) => async dispatch => {
    const item = {
        name,
        number,
        id:uuidv4(),
    }

    dispatch(contactsAction.addContactsRequuest());
    console.log(API.AddContacts(item));
    API.AddContacts(item).then(({ data }) => dispatch(contactsAction.addContactsSuccess(data))).catch(error => dispatch(contactsAction.addContactsError(error)));
}