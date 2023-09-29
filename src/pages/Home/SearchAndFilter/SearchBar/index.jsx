import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import * as S from "./index.styles";

export default function SearchBar({ setFilter }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    const search = event.target.value;
    setSearchValue(search);
    setFilter((prevFilter) => ({ ...prevFilter, ["search"]: search.trim() }));
  };

  const handleClear = () => {
    setSearchValue("");
    setFilter((prevFilter) => ({ ...prevFilter, ["search"]: "" }));
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
