import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const filtersValue = useSelector(selectNameFilter);
  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={filtersValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

export default SearchBox;
