import Filter from "./Filter";
import SearchBar from "./SearchBar";

export default function Search(props) {
  return (
    <div>
      <SearchBar {...props} />
      <Filter />
    </div>
  );
}
