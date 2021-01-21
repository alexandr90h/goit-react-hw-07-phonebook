import ContactsListItem from '../ContactsList/ContactsItem';
import styles from '../ContactsList/conractsList.module.scss';
import PropTypes from 'prop-types';
import * as operation from "../redux/operation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

export default function FilterContactsList() {
    const filterName = useSelector(state => state.filter);
    const filterItems = useSelector(state => state.filterItems);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(operation.filterContacts(filterName));
        // eslint-disable-next-line
    },[filterItems])
    return (
        <ol className={styles.contactList}>
            {filterItems.map(obj => {
                return(<ContactsListItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                    onBtnDelId={()=>dispatch(operation.delContacts(obj.id))}
                />)
            })}
        </ol>
    )
}

FilterContactsList.propTypes = {
    stateData: PropTypes.array,
    changeFilter: PropTypes.string,
    onBtnDelId:PropTypes.func,
}