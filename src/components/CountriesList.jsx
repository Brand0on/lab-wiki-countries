import { Link } from 'react-router-dom';
const CountriesList = (props) => {
  const countries = props.allCountries;
  return (
    <div>
      <h1>All the countries</h1>
      {countries.map((countrie) => {
        console.log(countrie);
        return (
          <Link
            className="link_countries"
            to={`/countries/${countrie.alpha3Code}`}
          >
            {countrie.name.common}
            <hr />
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${countrie.alpha2Code.toLowerCase()}.png`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
