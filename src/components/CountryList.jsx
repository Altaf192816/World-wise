import PropTypes from "prop-types";

import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );

  //! BigO n3 using reduce and some
  //   const countries = cities.reduce((acc, city) => {
  //     if (!acc.some((el) => el.country === city.country))
  //       return [...acc, { country: city.country, emoji: city.emoji }];
  //     else return acc;
  //   }, []);

  //! Better soultion with set
  const countries = [
    ...new Set(
      cities.map((city) =>
        JSON.stringify({ country: city.country, emoji: city.emoji })
      )
    ),
  ].map((countryel) => JSON.parse(countryel));

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
