import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactList}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button
        className={css.btnDell}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
