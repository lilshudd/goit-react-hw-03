import PropTypes from "prop-types";
import Contact from "./Contact";
import styles from "./styles/ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={() => onDelete(contact.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
