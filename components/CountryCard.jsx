import React from "react";

export default function CountryCard({name,flag})
 {
  
  return (
    <a className="country-card" href="/country.html?name=Grenada">
      <img src={flag} alt={name + `flag`} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>1,12,519
        </p>
        <p>
          <b>Region: </b>Americas
        </p>
        <p>
          <b>Capital: </b>St. George's
        </p>
      </div>
    </a>
  );
}
