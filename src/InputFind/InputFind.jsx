import styles from './inputFind.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import * as operation from "../redux/operation";



export default function InputFind() {
    const dispatch = useDispatch();
    const resetInputFind = () => {
        dispatch(operation.filterContacts(''));
        document.querySelector("#btn-reset").style.color = "rgb(192, 192, 192)";
    }
    const hendlInputFilter = e => {
        dispatch(operation.filterContacts(e.currentTarget.value));
        e.currentTarget.value ? document.querySelector("#btn-reset").style.color = "red" : document.querySelector("#btn-reset").style.color = "rgb(192, 192, 192)";
    }
    return (
            <div className={styles.inputContainer}>
            <label>Find contacts by name </label>
            <form className={styles.formBox}>
                <input type="text"
                    autoComplete="off"
                    onChange={hendlInputFilter} />
                <button type="reset" onClick={resetInputFind} id="btn-reset"><FiX /></button>
            </form>
            </div>
        )
};
InputFind.propTypes = {
    onChangeFind:PropTypes.func,
}