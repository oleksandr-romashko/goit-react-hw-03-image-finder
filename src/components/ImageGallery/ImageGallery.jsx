import { nanoid } from 'nanoid'

import { ImageGalleryItem, Button, Loader, Message } from "components";
import css from "./ImageGallery.module.css";

const MESSAGE_NOT_FOUND = "Sorry, no results found for your search. Try refining your search terms.";
const MESSAGE_NO_LOAD_MORE = "You've reached the end of the search results. Feel free to adjust your search criteria or explore more amazing pictures."

/**
 * Gallery of images with a list of image cards.
 * @returns {React.Component}
 */
export const ImageGallery = ({ images, page, isLoading, hasLoadMore, onLoadMore }) => {

  const handleLoadMore = () => onLoadMore();

  return (
    <div>
      <ul className={css.gallery}>
        {images && images.length > 0 &&
          <>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={`id${id}-${nanoid()}`}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            ))}
          </>
        }
      </ul>
      {page === 1 && isLoading && <Loader />}
      {images && images.length === 0 && <Message><p>{MESSAGE_NOT_FOUND}</p></Message>}
      {images && images.length > 0 && !hasLoadMore && <Message><p>{MESSAGE_NO_LOAD_MORE}</p></Message>}
      {images && hasLoadMore && <Button isLoading={isLoading && page !== 1} onClick={handleLoadMore} />}
    </div>
  )
};