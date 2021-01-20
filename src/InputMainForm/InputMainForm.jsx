import styles from './inputMainForm.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux";
import * as operation from "../redux/operation";


export default function InputMainForm() {

        const schema = yup.object().shape({
        name: yup.string().required(),
        number:yup.number().required(),
    })

    const stateData = useSelector(state => state.items);
    const { register, handleSubmit, errors} = useForm({resolver:yupResolver(schema)});
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const hendleInputChanga = e => {
        switch (e.target.name) {
            case 'name': setName(e.target.value)
                break;
            case 'number': setNumber(e.target.value)
                break;
            default:
                break;
        }
    }
    const hendleOnSubmite = () => {
        if (stateData.find(obj => obj.name.toLowerCase() === name.toLowerCase()) !== undefined) {
            alert(`${name} is alreadyin contacts.`);
            return;
        }
        dispatch(operation.addContacts( name, number ));
        dispatch(operation.fetchContacts());
        reset();
    }
    const reset = () => {
        setName('');
        setNumber('');
    }
     return (
            <div>
            <form onSubmit={handleSubmit(hendleOnSubmite)} className={styles.mainForm}>
                <label>Name 
            <input type="text" name="name" autoComplete="off" value={name} onChange={hendleInputChanga} ref={register} />
                 </label>
                 {errors.name && <p>{errors.name.message}</p>}
                <label>Number
                     <input type="text" name="number" autoComplete="off" value={number} onChange={hendleInputChanga} ref={register}/>
                 </label>
                 {errors.number && <p>{ errors.number.message}</p>}
                <button type="submit">Add contact</button>
        </form>
            </div>
    );

};
