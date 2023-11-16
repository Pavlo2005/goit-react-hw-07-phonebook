import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, StyledForm } from './PhoneForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { valueContacts } from 'redux/selectors';
import { addContacts } from 'redux/operations';

const quizSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').required('This field is required!'),
    number: Yup.string()
        .min(8, 'Min 8 mins')
        .max(16, 'Max 16 mins')
        .required('This field is required!'),
});

export const PhoneForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(valueContacts)

    const onAddPhone = newPhone => {
        if (contacts.find(contact => contact.name === newPhone.name)) {
            alert(`${newPhone.name} is Olredy in contacts`)
        }
        else {
            dispatch(addContacts({ ...newPhone, id: nanoid() }))
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>

            <Formik
                initialValues={{
                    name: '',
                    number: '',
                }}
                validationSchema={quizSchema}
                onSubmit={(values, actions) => {
                    onAddPhone(values);
                    actions.resetForm();
                }}
            >
                <StyledForm>
                    <label>
                        Name
                        <Field name="name" />
                        <ErrMessage name="name" component="div" />
                    </label>
                    <label>
                        Number
                        <Field type="number" name="number" />
                        <ErrMessage name="number" component="div" />
                    </label>
                    <button type="submit">Add contact</button>
                </StyledForm>
            </Formik>
        </div>
    );
};