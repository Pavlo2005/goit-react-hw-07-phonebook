import { deleteContact } from "redux/contactsSlice";
import { Button, Container } from "./ContactsCard.styled";
import { useDispatch } from "react-redux";

export const ContactsCard = (
    { contact: {
        id,
        name,
        number
    } }
) => {
    const dispatch = useDispatch();

    return (
        <Container>
            <p>{`${name}: ${number}`}</p>
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </Container>
    );
}