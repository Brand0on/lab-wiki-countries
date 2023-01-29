import { BrowserRouter, Routes, Route } from 'react-router-dom';
//importing all the countries from countries.json file.
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountrieDetails from './components/CountrieDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<CountriesList allCountries={countries} />}
          />

          <Route
            path="/countries/:id"
            element={<CountrieDetails allCountries={countries} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
