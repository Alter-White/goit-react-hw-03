import css from "./SearchBox.module.css";

const SearchBox = ({ handleSearch }) => (
  <div className={css.searchContainer}>
    <label htmlFor="search">Find contacts by name:</label>
    <input
      className={css.searchInput}
      type="text"
      id="search"
      onChange={handleSearch}
    />
  </div>
);
export default SearchBox;
