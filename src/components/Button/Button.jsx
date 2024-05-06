import css from "./Button.module.css";

/**
 * Button to load the next batch of Images to render them with the previous ones.
 * The button is rendered only when there are some loaded images.
 * If the image array is empty, the button is not rendered.
 * @returns {React.Component}
 */
export const Button = () => (
  <button className={css.button}>Load more</button>
);