import React from 'react';

const Country = (props) => {
    const {flag, name, capital, alpha2Code, population, region, numericCode} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <tr>
            <td><img style={{maxWidth : '50px'}} src={flag} alt={name}/></td>
            <td>{name}</td>
            <td>{capital}</td>
            <td>{props.country.currencies[0].name}</td>
            <td>{props.country.languages[0].name}</td>
            <td>{population}</td>
            <td>{region}</td>
            <td>{numericCode}</td>
            <td><button onClick={() => handleAddCountry(props.country)}>Add Country</button></td>
        </tr>
    );
};

export default Country;