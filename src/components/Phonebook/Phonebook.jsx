import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Phonebook.module.css'

const Phonebook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return <>
        <div style={{padding: '40px',}}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />

            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    </>
}

export default Phonebook