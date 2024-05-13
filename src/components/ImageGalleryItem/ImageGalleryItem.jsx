import css from "./ImageGalleryItem.module.css";

/**
 * A list item component with an image.
 * @returns {React.Component}
 */
export const ImageGalleryItem = ({ id, previewURL, webformatURL, tags }) => {
  return (
    <li className={css["gallery-item"]}>
        <img
          className={css.image}
          src={webformatURL}
          title={`Click to zoom-in`}
          alt={tags}
          data-id={id}
          style={{ backgroundImage: `url(${previewURL}`}}
          loading="lazy"
        />
    </li>
  )
};
