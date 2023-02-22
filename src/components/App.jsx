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
const MainPage  = lazy(() => import("./Phonebook/MainPage/MainPage"))
const Phonebook = lazy(() => import('../components/Phonebook/Phonebook'))
const RegisterForm = lazy(() => import('../components/Phonebook/RegisterForm/RegisterForm'))
const VerifyPage  = lazy(() => import("./Phonebook/VerifyPage/VerifyPage"));
const LoginForm = lazy(() => import('../components/Phonebook/LoginForm/LoginForm'))
const PageNotFound = lazy(() => import('../components/Phonebook/PageNotFound/PageNotFound'))

export const App = () => {
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const {isLoadingUser} = useSelector(getAuth)

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser(token))
    }
  }, [dispatch, token])

  return (
    <>
      {isLoadingUser ? <LoaderRoute /> : 
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/register" element={<PublicRoute><RegisterForm /></PublicRoute>} />
            <Route path="/verify/:verificationToken" element={<PublicRoute><VerifyPage /></PublicRoute>} />
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