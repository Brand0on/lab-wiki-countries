import { usaParams, useParams } from 'react-router-dom';
import { useState } from 'react';

const CountrieDetails = ({ allCountries }) => {
  const { id } = useParams();

  const countrie = allCountries.filter((value) => {
    return value.alpha3Code === id;
  });
  const [oneCountry, setOneCountry] = useState(countrie);

  console.log('the country', oneCountry);

  return (
    <>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry[0].alpha2Code.toLowerCase()}.png`}
      />
      <br />
      <hr />
      <h1>{oneCountry[0].name.official}</h1>

      <br />
      <hr />

      <h3>Also known as {oneCountry[0].name.common}</h3>
      <br />
      <hr />

      <h3>Area: {oneCountry[0].area}</h3>
      <br />
      <hr />
    </>
  );
};

export default CountrieDetails;
