import css from "./Loader.module.css";

/**
 * Spinner component, displays while images are being loaded. 
 * @returns {React.Component}
 */
export const Loader = () => (
  <div className={css.loader}>Loader</div>
);