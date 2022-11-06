import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuth } from 'redux/auth/authSlice';
import { loginUser } from 'redux/auth/authOperations';
import css from '../ContactForm/ContactForm.module.css'
import { Loader } from '../Loader/Loader';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        switch (name) {
            case 'userEmail':
                setEmail(value)
                break;
            case 'userPassword':
                setPassword(value)
                break;
            default:
                setEmail('')
                setPassword('')
        }
    }

    const dispatch = useDispatch();
    const { isLoading, isLoggedIn } = useSelector(getAuth);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser({ email: email, password: password }));

        if (isLoggedIn) {
            setEmail('')
            setPassword('')
        }
    }

    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);
    
    return (<form onSubmit={handleSubmit} className={css.insertWrapper}>
        <label className={css.label} htmlFor={emailId}>Email</label>
        <input
            id={emailId}
            type="email"
            name="userEmail"
            value={email}
            onChange={handleChange}
            required
            placeholder='your_email'
            className={css.input} />
        <label className={css.label} htmlFor={passwordId}>Password</label>
        <input
            id={passwordId}
            type="password"
            name="userPassword"
            value={password}
            onChange={handleChange}
            required
            placeholder='your_password'
            className={css.input} />
        {!isLoading ? <button type='submit' className={css.button}>Log In</button> : <Loader />
        }
    </form>)
}

export default LoginForm