import css from "./Modal.module.css";

/**
 * Modal window with a dark overlay which displays a larger version of the image.
 * @returns {React.Component}
 */
export const Modal = () => (
  <div className={css.overlay}>
    <div className={css.modal}>
      <img src="" alt="" />
    </div>
  </div>
);
