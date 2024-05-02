import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.contactList}>
    {contacts.map((contact) => (
      <Contact key={contact.id} {...contact} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactList;
