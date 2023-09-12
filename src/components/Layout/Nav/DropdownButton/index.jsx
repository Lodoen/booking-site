import { BsList } from "react-icons/bs";
import { useContext } from "react";
import { HeaderContext } from "../../../../context/HeaderContext";

export default function DropdownButton() {
  const { isDropdownOpen, setIsDropdownOpen } = useContext(HeaderContext);
  return (
    <li>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="dropdown-menu"
      >
        <span className="icon">
          <BsList />
        </span>
        <span className="desc">Menu</span>
      </button>
    </li>
  );
}
