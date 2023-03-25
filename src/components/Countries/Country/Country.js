import React from 'react';
import "./Country.css";

const Country = (props) => {
    const {name, population, area, region, flags, startOfWeek} = props.country;
    return (
        <div className="country">
            <h2>{name.common}</h2>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
            <img src={flags.png} alt=""/>
        </div>
    );
};

export default Country;
