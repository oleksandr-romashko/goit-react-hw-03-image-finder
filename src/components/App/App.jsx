import React from 'react';

import { getImagesApi } from 'api';

import {
  Searchbar,
  ImageGallery,
  ApiReference,
  Message
} from 'components';
import css from './App.module.css';

const MESSAGE_ERROR = "Whoops, something went wrong:";

/**
 * Image Search Gallery Application root component.
 * @returns {React.Component}
 */
export class App extends React.Component {
  static IMG_PER_PAGE = 12;

  defaultState = {
    searchQuery: "",
    images: null,
    isLoading: false,
    hasLoadMore: false,
    page: 1,
    isModalOpened: false,
    error: null,
  };

  state = { ...this.defaultState };

  /**
   * 
   * * Condition 'this.state.error && prevState.error' helps to mitigate cases, 
   * * when error occures and allow subsequent submit of the same search request again
   * * (e.g. network error or unstable connection) without reloading the page.
   * @param {*} _ 
   * @param {*} prevState 
   */
  componentDidUpdate(_, prevState) {
    if (this.state.page !== prevState.page 
        || this.state.searchQuery !== prevState.searchQuery
        || (this.state.error && prevState.error)) {
      if (this.state.searchQuery !== prevState.searchQuery) {
        this.setState({ images: this.defaultState.images });
      }
      this.getImages();
    }
  }

  /**
   * Handles errors in child components.
   * @param {object} error The error that was thrown.
   */
  componentDidCatch(error) {
    this.setState({ error: error });
 }

  getImages = async () => {
    try {
      this.setState({ isLoading: true, error: this.defaultState.error });
      const data = await getImagesApi(this.state.searchQuery, this.state.page, App.IMG_PER_PAGE);
      const images = this.state.images && this.state.images.length > 0 ? [...this.state.images, ...data.hits] : data.hits;
      const hasLoadMore = this.state.page < Math.ceil(data.totalHits / App.IMG_PER_PAGE);

      this.setState({
        images,
        hasLoadMore,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  handleImageSearch = (searchQuery) => {
    this.setState({ searchQuery });
  }

  handleLoadMore = () => {
    this.setState({page: this.state.page + 1});
  }

  handleOpenModal = (largeImageUrl) => {
    // TODO: open modale using url
  }

  render() {
    const { images, error, isLoading, hasLoadMore } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSearch={this.handleImageSearch} />
        {error &&
          <Message>
            <p>{MESSAGE_ERROR}</p>
            <p>"{error.message}"</p>
          </Message>
        }
        {!error && <ImageGallery
                      className="hello"
                      images={this.state.images}
                      page={this.state.page}
                      isLoading={isLoading}
                      hasLoadMore={hasLoadMore}
                      onLoadMore={this.handleLoadMore}
                      onOpenModal={this.handleOpenModal}
                    />
        }
        {!error && images && images.length > 0 && <ApiReference />}
      </div>
    );
  }
};
