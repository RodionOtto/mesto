import { openPopup } from "./index.js";

const popupIncreased = document.querySelector(".popup_type_increasedcard");
const increasedImage = popupIncreased.querySelector(".increasedcard__image");
const increasedElementCaption = popupIncreased.querySelector(
  ".increasedcard__alt"
);

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventlisteners();
    this._elementImage = this._element.querySelector(".elements__image");
    this._element.querySelector(".elements__header").textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    return this._element;
  }

  _setEventlisteners() {
    this._element
      .querySelector(".elements__like-button")
      .addEventListener("click", () => {
        this._likeCard();
      });
    this._element
      .querySelector(".elements__delete-button")
      .addEventListener("click", () => {
        this._deleteCard();
      });
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._openImagePopup();
      });
  }

  _likeCard() {
    this._element
      .querySelector(".elements__like-button")
      .classList.toggle("elements__like-button_active");
  }

  _deleteCard() {
    this._element.remove();
  }

  _openImagePopup() {
    increasedImage.src = this._link;
    increasedElementCaption.textContent = this._name;
    increasedElementCaption.alt = this._name;

    openPopup(popupIncreased);
  }
}
