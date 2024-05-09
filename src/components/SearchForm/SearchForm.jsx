import css from "./SearchForm.module.css";



/**
 * Form to submit search query.
 * @returns {React.Component}
 */
export const SearchForm = ({ submit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.query.value;
      submit(searchQuery);
  }
  
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button type="submit" className={css.button}>
        <span className={css['button-label']}>Search</span>
      </button>
      
      <input
        className={css.input}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        required
      />
    </form>
  )
};
