import { Button, ImageGallery, Searchbar } from 'components';
import css from './App.module.css';

/**
 * Image Search Gallery Application root component.
 * @returns {React.Component}
 */
export const App = () => {
  return (
    <div className={css.app}>
      <Searchbar />
      <ImageGallery />
      <Button />
    </div>
  );
};
