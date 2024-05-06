import { SearchForm } from "components/SearchForm/SearchForm";
import css from "./Searchbar.module.css";

/**
 * Searchbar that contains form to search for images.
 * @returns {React.Component}
 */
export const Searchbar = () => (
  <header className={css.searchbar}>
    <SearchForm />
  </header>
);