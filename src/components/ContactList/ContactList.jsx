import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

function ContactList() {
  const cotacts = useSelector(selectContacts);
  const filteredValue = useSelector(selectNameFilter);

  //Function to display searched contact
  const filterContacts = cotacts.filter((contact) =>
    contact.name.toLowerCase().includes(filteredValue.toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {filterContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact}></Contact>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
