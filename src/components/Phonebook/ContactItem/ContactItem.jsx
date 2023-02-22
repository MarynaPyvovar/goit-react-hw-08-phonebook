import React from 'react';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsOperation'; 
import css from '../ContactItem/ContactItem.module.css'

export const ContactItem = ({ data }) => {
    const dispatch = useDispatch();

    const { _id, name, phone } = data;

    const onDeleteClick = (e, id) => {
        if (id === e.target.id) {
            e.target.textContent = 'Deleting...';
            e.target.setAttribute('disabled', 'true');
        }

        dispatch(removeContact(id))
    }

    return <li className={css.contactItem}>
        <p className={css.contactText}>{name}: {phone}</p>
            <button type='button' className={css.contactBtn} id={_id} onClick={(e) => onDeleteClick(e, _id)}>Delete
            </button>
    </li>
}

ContactItem.propTypes = {
    data: PropTypes.object,
}