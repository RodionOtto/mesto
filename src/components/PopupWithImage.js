import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, picture, caption) {
    super(popupSelector);
    this._picture = picture;
    this._caption = caption;
  }

  open(name, link) {
    super.open();
    this._picture.src = link;
    this._caption.textContent = name;
    this._caption.alt = name;
  }
}
