import PropTypes from "prop-types";
import styles from "./styles/SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        placeholder="Search Contacts"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
