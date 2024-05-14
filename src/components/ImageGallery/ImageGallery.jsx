import PropTypes from "prop-types";

import { ImageGalleryItem, Button, Loader, Message } from "components";
import css from "./ImageGallery.module.css";
import errorImg from "images/critical/error-bg.svg";

const MESSAGE_NOT_FOUND = "Sorry, no results found for your search. Try refining your search terms.";
const MESSAGE_END_OF_SEARCH_RESULTS = "You've reached the end of the search results. Feel free to adjust your search criteria or explore more amazing pictures."

/**
 * Gallery of images with a list of image cards.
 * @param {object[]} props.images Image objects.
 * @param {number} props.page Current searched images page number.
 * @param {boolean} props.isLoading Current data loading status.
 * @param {boolean} props.hasLoadMore Flag if there are more available images available to load.
 * @param {callback} props.onLoadMore Callback function to load of more images.
 * @param {callback} props.onImageClick Callback function for click on image.
 * @returns {React.Component}
 */
export const ImageGallery = ({ images, page, isLoading, hasLoadMore, onLoadMore, onImageClick }) => {

  const handleGalleryImageClick = ({target}) => {
    if (target.nodeName === "IMG") {
      onImageClick(target.dataset.id);
    }
  }
  return (
    <div>
      <ul id="image-gallery" className={css.gallery} onClick={handleGalleryImageClick}>
        {images && images.length > 0 &&
          <>
            {images.map(({ id, previewURL, webformatURL, tags }, idx) => (
              <ImageGalleryItem
                key={`id${id}idx${idx}`}
                id={id}
                previewURL={previewURL}
                webformatURL={webformatURL}
                tags={tags}
              />
            ))}
          </>
        }
      </ul>
      {page === 1 && isLoading && <Loader />}
      {images && images.length === 0 && <Message>
                                          <img src={errorImg} alt="error bg"></img>
                                          <p>{MESSAGE_NOT_FOUND}</p>
                                        </Message>}
      {images && images.length > 0 && !hasLoadMore && <Message><p>{MESSAGE_END_OF_SEARCH_RESULTS}</p></Message>}
      {images && hasLoadMore && <Button isLoading={isLoading && page !== 1} onClick={onLoadMore} />}
    </div>
  )
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasLoadMore: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
}