import Popup from "./Popup.js";
import { cardLink, cardTitle } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, picture, caption) {
    super(popupSelector);
    this._picture = picture;
    this._caption = caption;
  }

  open(cardTitle, cardLink) {
    super.open();
    this._picture.src = cardLink;
    this._caption.textContent = cardTitle;
    this._caption.alt = cardTitle;
  }
}
