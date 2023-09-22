// import { useEffect, useState } from "react";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import * as S from "./index.styles";

export default function SearchAndFilter({ setFilter, filter }) {
  return (
    <S.SearchAndFilterContainer>
      <SearchBar setFilter={setFilter} />
      <Filter setFilter={setFilter} filter={filter} />
    </S.SearchAndFilterContainer>
  );
}
