export default class Card {
  constructor(
    { name, link, handleCardClick, handleDeleteCardClick },
    cardSelector
  ) {
    this._cardSelector = cardSelector;
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".elements__image");
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._element.querySelector(".elements__header").textContent = this._name;
    this._setEventlisteners();

    return this._element;
  }

  _likeCard() {
    this._element
      .querySelector(".elements__like-button")
      .classList.toggle("elements__like-button_active");
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
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
        this._handleDeleteCardClick();
      });
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }
}
