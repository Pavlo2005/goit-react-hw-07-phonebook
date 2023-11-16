import { Button, Container } from "./ContactsCard.styled";
import { useDispatch } from "react-redux";
import { deleteContacts } from "redux/operations";

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
            <Button onClick={() => {
                dispatch(deleteContacts(id))
            }}>Delete</Button>
        </Container>
    );
}