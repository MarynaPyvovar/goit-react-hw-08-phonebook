import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from 'redux/auth/authSlice';
import { logoutUser } from 'redux/auth/authOperations';
import { NavLink, useNavigate } from 'react-router-dom';
import css from '../UserMenu/UserMenu.module.css'

export const UserMenu = () => {
    const { user, isLoggedIn } = useSelector(getAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogoutClick = () => {
        dispatch(logoutUser())
        navigate('/login')
    }

    return (
        <>
            {isLoggedIn ?
            <div className={css.userWrapper}><p className={css.greeting}>{`Welcome, ${user.name}!`}</p><button className={css.link} type='button' onClick={onLogoutClick}>Log Out</button></div> :
            <div className={css.menuWrapper}><NavLink className={css.link} to='/register'>Sign Up</NavLink><NavLink className={css.link} to='/login'>Log In</NavLink></div>
            }
    </>
    )
}