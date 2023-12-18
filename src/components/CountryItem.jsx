import PropTypes from "prop-types";
import styles from "./CountryItem.module.css";
import { flagemojiToPNG } from "./FlagToPng";

CountryItem.propTypes = {
  country: PropTypes.object,
};

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
