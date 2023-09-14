import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import * as S from "./index.styles";

function extractLocationInfo(location) {
  const { address, city, country } = location;
  return [address, city, country];
}

function filterVenues(search, venues) {
  if (!search) {
    return venues;
  }
  return venues.filter(({ name, location }) => {
    const venueInfo = [name, ...extractLocationInfo(location)];
    for (let i = 0; i < venueInfo.length; i++) {
      if (venueInfo[i].toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    }
  });
}

export default function SearchBar({ allVenues, setVenues }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    const search = event.target.value;
    setSearchValue(search);
    setVenues(filterVenues(search.trim(), allVenues));
  };

  const handleClear = () => {
    setSearchValue("");
    setVenues(allVenues);
  };

  return (
    <S.SearchContainer>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button onClick={handleClear}>
          <figure>
            <BsXLg />
          </figure>
        </button>
      </div>
    </S.SearchContainer>
  );
}
