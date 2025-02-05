import React from 'react'

export default function CountryCard() {
  return (
    <div className="country-details">
    <img src="" alt="" />
    <div className="details-text-container">
      <h1>Iceland</h1>
      <div className="details-text">
        <p><b>Native Name: </b><span className="native-name"></span></p>
        <p><b>Population: </b><span className="population"></span></p>
        <p><b>Region: </b><span className="region"></span></p>
        <p><b>Sub Region: </b><span className="sub-region"></span></p>
        <p><b>Capital: </b><span className="capital"></span></p>
        <p>
          <b>Top Level Domain: </b><span className="top-level-domain"></span>
        </p>
        <p><b>Currencies: </b><span className="currencies"></span></p>
        <p><b>Languages: </b><span className="languages"></span></p>
      </div>
      <div className="border-countries"><b>Border Countries: </b>&nbsp;</div>
    </div>
  </div>
  )
}
