import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getAuth } from 'redux/auth/authSlice';
import { loginUser } from 'redux/auth/authOperations';

import css from '../ContactForm/ContactForm.module.css'
import { Loader } from '../Loader/Loader';

const LoginForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        switch (name) {
            case 'userName':
                setName(value)
                break;
            case 'userEmail':
                setEmail(value)
                break;
            default:
                setName('')
                setEmail('')
        }
    }

    const dispatch = useDispatch();
    const { isLoading } = useSelector(getAuth);
    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser({ name: name, email: email }));
        // navigate('/contacts')

        setName('')
        setEmail('')
    }

    const nameId = useMemo(()=> nanoid(), []);
    const emailId = useMemo(()=> nanoid(), []);
    
    return (<form onSubmit={handleSubmit} className={css.insertWrapper}>
        <label className={css.label} htmlFor={nameId}>Name</label>
        <input
            id={nameId}
            type="text"
            name="userName"
            value={name}
            onChange={handleChange}
            required
            placeholder='UserName'
            className={css.input} />
        <label className={css.label} htmlFor={emailId}>Email</label>
        <input
            id={emailId}
            type="email"
            name="userEmail"
            value={email}
            onChange={handleChange}
            required
            placeholder='your_email@mail.com'
            className={css.input} />
        {!isLoading ? <button type='submit' className={css.button}>Log In</button> : <Loader />
        }
    </form>)
}

export default LoginForm