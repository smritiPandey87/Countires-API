import React from "react";
import CountriesData from "../CountriesData";
import CountryCard from "./CountryCard";

export default function CountriesList() {
  const array = CountriesData.map((country, i) => {
    return (
      <CountryCard
        key={i}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population.toLocaleString("en-IN")}
        region={country.region}
        capital={country.capital?.[0]}
      />
    );
  });

  return <div className="countriesContainer">{array}</div>;
}
