import PropTypes from "prop-types";
import "./styles/Contact.css";

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="contact">
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button className="button" onClick={handleClick}>
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
