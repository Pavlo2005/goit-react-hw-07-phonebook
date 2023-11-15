import { ContactsCard } from "components/ContactsCard/ContactsCard";
import { ContactElement } from "./Contacts.styled";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from "redux/filterSlice";

export const Contacts = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);
    const newContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
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