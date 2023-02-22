import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/auth/authSlice';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { getContacts } from '../../../redux/contacts/contactsSlice';
import { getFilter } from '../../../redux/filter/filterSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import css from '../ContactList/ContactList.module.css';

export const ContactList = () => {
    const { token } = useSelector(getAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(fetchContacts());
        }
    }, [dispatch, token]);

    const { items, isLoading, error } = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getFilteredContacts = () => {
        if (!filter) {
            return items;
        }
        
        return items.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    }

    const contactsToRender = getFilteredContacts()

    return <ul className={css.list}>
        {isLoading && <div>Loading...</div>} 
        {contactsToRender.length > 0 ? contactsToRender.map(item =>
            <ContactItem key={item._id} data={item} />) : <div>Your contact list is empty</div>}
        {error && <div>Something went wrong, please, try again</div>}
    </ul>
}