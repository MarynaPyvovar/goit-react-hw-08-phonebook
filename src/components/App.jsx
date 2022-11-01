import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from "./Phonebook/Layout/Layout";
const Phonebook = lazy(() => import('../components/Phonebook/Phonebook'))
const RegisterForm = lazy(() => import('../components/Phonebook/RegisterForm/RegisterForm'))
const LoginForm = lazy(() => import('../components/Phonebook/LoginForm/LoginForm'))
const PageNotFound = lazy(() => import('../components/Phonebook/PageNotFound/PageNotFound'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<RegisterForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/contacts' element={<Phonebook />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1000}/>
    </>
  );
};
