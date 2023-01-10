import React from 'react';
import css from '../MainPage/MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={css.wrapper}>
          <h1 className={css.title}>Hello! I am your personal Phonebook</h1>
          <p className={css.text}>Get access to your contacts from any gadget and don't worry about losing an important number.</p>
          <p className={css.text}>Click on 'Sign up' and enjoy.</p>
    </div>
  )
}

export default MainPage
