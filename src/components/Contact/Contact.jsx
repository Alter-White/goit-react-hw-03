import css from "./contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => (
  <li className={css.contactItem} key={id}>
    <div>
      <div className={css.contactDescription}>
        <FaUser className={css.icon} /> {name}
      </div>
      <div className={css.contactDescription}>
        <FaPhone className={css.icon} />
        {number}
      </div>
    </div>
    <button className={css.deleteButton} onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

export default Contact;
