import CountriesList from "../components/CountriesList";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";

import SearchBar from "../components/SearchBar";
import SelectMenu from "../components/SelectMenu";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
      </main>
      <CountriesList />
    </>
  );
}

export default App;
