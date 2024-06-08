import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { filteredContacts } from "../../redux/actions";

export default function ContactList() {
  const contacts = useSelector(filteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id} className={css.contactItem}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))
      ) : (
        <p>Sorry, there is no information</p>
      )}
    </ul>
  );
}
