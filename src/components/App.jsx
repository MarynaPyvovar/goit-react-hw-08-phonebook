import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCurrentUser } from "redux/auth/authOperations";
import { getAuth } from "redux/auth/authSlice";
import {PrivateRoute} from "./Routes/PrivateRoute";
import {PublicRoute} from "./Routes/PublicRoute";

import { Layout } from "./Phonebook/Layout/Layout";
import { LoaderRoute } from "./Phonebook/Loader/Loader";
const Phonebook = lazy(() => import('../components/Phonebook/Phonebook'))
const RegisterForm = lazy(() => import('../components/Phonebook/RegisterForm/RegisterForm'))
const LoginForm = lazy(() => import('../components/Phonebook/LoginForm/LoginForm'))
const PageNotFound = lazy(() => import('../components/Phonebook/PageNotFound/PageNotFound'))

export const App = () => {
  const dispatch = useDispatch();
  const {isLoadingUser} = useSelector(getAuth)

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <>
      {isLoadingUser ? <LoaderRoute /> : 
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/register" element={<PublicRoute><RegisterForm /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginForm /></PublicRoute>} />
          <Route path="/contacts" element={<PrivateRoute><Phonebook /></PrivateRoute>} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
      }
      <ToastContainer autoClose={1000}/>
    </>
  );
};