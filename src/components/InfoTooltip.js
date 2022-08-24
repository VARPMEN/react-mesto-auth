import "./styles/PopupWithForm.css";
import "./styles/InfoTooltip.css";
import closeIcon from "../images/close-icon.svg";
import successIcon from "../images/success-pic.svg";
import failureIcon from "../images/failure-pic.svg";

function InfoTooltip({ title, onClose, isOpen, isSignUp }) {
  return (
    <section
      className={`popup ${isOpen && "popup_opened"}`}
      aria-label={`${title}`}
    >
      <div className="popup__container info-tool__container">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        >
          <img
            src={closeIcon}
            alt="Закрыть"
            className="popup__close-btn-icon"
          />
        </button>
        <img
          className="info-tool__image"
          src={isSignUp ? successIcon : failureIcon}
        />
        <h2 className="popup__title info-tool__title">{title}</h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
