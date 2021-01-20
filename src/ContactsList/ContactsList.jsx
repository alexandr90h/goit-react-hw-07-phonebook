import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ContactsListItem from './ContactsItem';
import styles from './conractsList.module.scss'
// import contactsAction from "../redux/action.js";
import * as operation from "../redux/operation";


export default function ContactsList() {
    const stateData = useSelector(state => state.items);
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(operation.fetchContacts());
        // eslint-disable-next-line
    }, [dispatch])
    return (
        <ol className={styles.contactList}>
            {stateData.map(obj => {
                return (<ContactsListItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                    onBtnDelId={()=>dispatch(operation.delContacts(obj.id))}
                />)
            })}
        </ol>
    )
}