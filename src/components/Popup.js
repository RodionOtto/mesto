export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopupWithEsc = this._closePopupWithEsc.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._closePopupWithEsc);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closePopupWithEsc);
  }

  _closePopupWithOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  _closePopupWithEsc(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._closeBtn = this._popup.querySelector(".popup__close");
    this._closeBtn.addEventListener("click", this.close.bind(this));
    this._popup.addEventListener(
      "mousedown",
      this._closePopupWithOverlay.bind(this)
    );
  }
}
