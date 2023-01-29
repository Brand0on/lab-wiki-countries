import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h1>LAB - WikiCountries</h1>

      <br />
      <Link className="allCountries" to="/">
        All Countries
      </Link>
    </div>
  );
};

export default Navbar;
