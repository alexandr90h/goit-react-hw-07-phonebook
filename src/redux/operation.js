import contactsAction from "./action";
import * as API  from '../api/api'

export const fetchContacts = () => async dispatch => {
    dispatch(contactsAction.fetchContactsRequuest);
    try {
        const contacts = await API.fetchContacts();
        dispatch(contactsAction.fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsAction.fetchContactsError(error.message))
    }
}