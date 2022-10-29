import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperation';
import { getContacts } from '../../../redux/contactsSlice';
import { getFilter } from '../../../redux/filterSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import css from '../ContactList/ContactList.module.css';

export const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const {items, error, isLoading} = useSelector(getContacts);
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
        {error && <div>Something went wrong, please, try again</div>}
        {contactsToRender.map(item =>
            <ContactItem key={item.id} data={item} />)
        }
    </ul>
}