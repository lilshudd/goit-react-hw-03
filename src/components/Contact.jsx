import PropTypes from "prop-types";
import styles from "./styles/Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const { name, number } = contact;

  return (
    <div className={styles.contact}>
      <p className={styles.name}>{name}</p>
      <p className={styles.number}>{number}</p>
      <button onClick={onDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
