import React from 'react';
import { AppContext } from '../../context/AppContext';
import './FormAdd.scss';

const FormAdd = (props) => {
    const [newTODOValue, setNewTODOValue] = React.useState('');
    const {setOpenModal, addTodo} = React.useContext(AppContext)
    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTODOValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTODOValue);
        setOpenModal(false);
    }
    return (
        <form className='form' onSubmit={onSubmit}>
            <label>{props.title}</label>
            <textarea onChange={onChange}
                placeholder={props.placeholder}>
            </textarea>
            <div className='form-buttons'>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button type='submit'onSubmit={onSubmit}>{props.buttonAdd}</button>
            </div>
        </form>
    );
}

export {FormAdd};