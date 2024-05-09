import css from "./ImageGalleryItem.module.css";

/**
 * A list item component with an image.
 * @returns {React.Component}
 */
export const ImageGalleryItem = ({webformatURL, largeImageURL, tags}) => (
  <li className={css['gallery-item']}>
    <button className={css['item-button']}>
      <img
        className={css.image}
        src={webformatURL}
        title={`Click to zoom`}
        alt={`${tags}`}
        data-large-image-url={largeImageURL}
        loading="lazy"
      />
    </button>
  </li>
);
