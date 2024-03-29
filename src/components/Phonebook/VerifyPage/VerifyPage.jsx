import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { verifyUser } from "redux/auth/authOperations";
import css from './VerifyPage.module.css';

const VerifyPage = () => {
  const dispatch = useDispatch();
  const { verificationToken } = useParams();

  useEffect(() => {
    dispatch(verifyUser(verificationToken));
  }, [dispatch, verificationToken]);

    return (
        <div>
            <p className={css.text}>
          Your email is verified! Now you can login
        </p>
        </div>
        
  );
}

export default VerifyPage