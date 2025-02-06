import React from "react";
import CountriesData from "../CountriesData";
import CountryCard from "./CountryCard";

export default function CountriesList() {
  const array = CountriesData.map((country) => {
    console.log(country)
    return <CountryCard name={country.name.common} flag={country.flags.svg} />;
  });

  return <div className="countriesContainer">{array}</div>;
}
