import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country'
import Cart from './Components/Cart/Cart';

function App() {

  const [countries, setCountry] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountry(data)
        // console.log(data)
        // data.map( country => country.name )
      })
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart)
  }

  return (
    <div className="container">
      <h3>Total Country : {countries.length} </h3>
      <Cart cart={cart}></Cart>
      <div className="table-responsive">
        <table className="table table-dark table-hover table-striped">
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Capital</th>
              <th>Currencies</th>
              <th>Languages</th>
              <th>Population</th>
              <th>Region</th>
              <th>Numeric Code</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)}
          </tbody>
          <tfoot>
            <tr>
              <td>Flag</td>
              <td>Name</td>
              <td>Capital</td>
              <td>Currencies</td>
              <td>Languages</td>
              <td>Population</td>
              <td>Region</td>
              <td>Numeric Code</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
