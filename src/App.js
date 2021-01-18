import styles from './app.module.scss';
import InputMainForm from './InputMainForm/InputMainForm';
import ContactsList from './ContactsList/ContactsList.jsx';
import InputFind from './InputFind/InputFind';
import FilterContactsList from './InputFind/FilterContactsList.jsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function App() {
  const stateData = useSelector(state => state.items);
  const filterName = useSelector(state => state.filter);
 useEffect(() => {
   localStorage.setItem('contacts', JSON.stringify(stateData));
   fetch('http://localhost:3001/contacts/').then(res=>res.json()).then(obj=>console.log(obj))
  }, [stateData,filterName]);
  
    return (
      <div className={styles.mainContainer}>
        <h1>Phonebook</h1>
        <div>
          <InputMainForm />
        </div>
        <div>
          <h2>Contacts</h2>
                  <InputFind />
          {filterName === ''
            ?
            <ContactsList/>
            :
            <FilterContactsList/>
          }
        </div>
    </div>
    )
};