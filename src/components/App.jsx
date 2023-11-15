import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(1);
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PhoneForm />
      <Contacts></Contacts>
    </div>
  );
}
