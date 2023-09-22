import { useState } from "react";
import FilterForm from "./FilterForm";
import * as S from "./index.styles";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Filter({ setFilter, filter }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <S.FilterWrapper>
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="filter-button"
      >
        <span>Filter</span>
        <figure>
          <BsThreeDotsVertical />
        </figure>
      </button>
      {isFilterOpen && (
        <div className="transparent-background">
          <div className="floating-form-wrapper">
            <FilterForm
              setFilter={setFilter}
              filter={filter}
              setIsFilterOpen={setIsFilterOpen}
            />
          </div>
        </div>
      )}
    </S.FilterWrapper>
  );
}
