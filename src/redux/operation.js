import contactsAction from "./action";
import * as API from '../api/api'


export const fetchContacts = () => async dispatch => {
    dispatch(contactsAction.fetchContactsRequuest);
    try {
        const contacts = await API.FetchContacts();
        dispatch(contactsAction.fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsAction.fetchContactsError(error.message))
    }
}
export const addContacts = (name, number) => async dispatch => {
    const item = {
        name,
        number,
    }
    dispatch(contactsAction.addContactsRequuest());
    API.AddContacts(item).then(({ data }) => dispatch(contactsAction.addContactsSuccess(data))).catch(error => dispatch(contactsAction.addContactsError(error)));
}
export const delContacts = (item) => async dispatch => {
    dispatch(contactsAction.addContactsRequuest());
    API.DelContacts(item).then(() => dispatch(contactsAction.delContactsSuccess(item))).catch(error => dispatch(contactsAction.delContactsError(error)));
}
export const filterContacts = (item) => async dispatch => {
    dispatch(contactsAction.filterContactsRequuest);
    try {
        const contacts = await API.FilterContacts(item);
        dispatch(contactsAction.filterContactsSuccess(contacts));
    } catch (error) {
        dispatch(contactsAction.filterContactsError(error));
    }
}