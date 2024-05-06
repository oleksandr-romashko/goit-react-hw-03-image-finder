import css from "./ImageGalleryItem.module.css";

/**
 * A list item component with an image.
 * @returns {React.Component}
 */
export const ImageGalleryItem = () => (
  <li className={css['gallery-item']}>
    <img className={css.image} src="" alt="" />
  </li>
);