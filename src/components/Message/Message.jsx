import css from './Message.module.css';

/**
 * Informational message component.
 * @param {React.Component[]} props.childres Children elements. 
 * @returns {React.Component}
 */
export const Message = ({children}) => (
  <div className={css['message-wrapper']}>
    {children}
  </div>
)

