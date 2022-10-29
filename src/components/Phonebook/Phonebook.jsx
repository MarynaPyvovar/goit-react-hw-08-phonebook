import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Phonebook.module.css'

export const Phonebook = () => {
    return <>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />

        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
    </>
}