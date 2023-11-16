import { ContactsCard } from "components/ContactsCard/ContactsCard";
import { ContactElement } from "./Contacts.styled";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from "redux/filterSlice";
import { valueCurentContacts } from "redux/selectors";


export const Contacts = () => {
    const newContacts = useSelector(valueCurentContacts);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Contacts</h2>

            <h3>Find contacts by name</h3>
            <input type="text" onChange={evt => dispatch(changeFilter(evt.target.value))} />

            <ul>
                {newContacts.map(contact => (
                    <ContactElement key={contact.id}>
                        <ContactsCard contact={contact}></ContactsCard>
                    </ContactElement>
                ))}
            </ul>
        </div>
    );

}