import { useState } from "react";
import CountriesList from "../components/CountriesList";

import Header from "../components/Header";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import SelectMenu from "../components/SelectMenu";
import "./App.css";
import "./index.css";

function App() {
   const [query,setQuery]= useState('')
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu />
        </div>
      </main>
      <CountriesList query={query}/>
    </>
  );
}

export default App;
