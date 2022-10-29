import { Phonebook } from "./Phonebook/Phonebook";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div style={{
        padding: '40px',
      }}>
      <Phonebook />
      <ToastContainer autoClose={1000} />
    </div>
  );
};
