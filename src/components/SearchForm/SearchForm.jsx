import css from "./SearchForm.module.css";

/**
 * Form to submit search query.
 * @returns {React.Component}
 */
export const SearchForm = () => (
  <form className={css.form}>
      <button type="submit" className={css.button}>
        <span className={css['button-label']}>Search</span>
      </button>

      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
);
