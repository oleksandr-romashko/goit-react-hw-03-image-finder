import pixabayLogo from 'images/pixabay-logo.svg';
import css from './ApiReference.module.css'

export const ApiReference = () => (
  <section className={css['reference-bar']}>
    Powered by:
    <PixabayRef />
  </section>
);

const PixabayRef = () => (
    <div className={css['reference-wrapper']}>
      <a className={css.pixabay} href="https://pixabay.com/api/docs/" title="Pixabay royalty-free content">
        <i className={css['image-wrapper']}>
          <img className={css.logo} src={pixabayLogo} alt="pixabay logo" />
        </i>
        Free Images
      </a>
    </div>
);
