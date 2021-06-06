import initialCards from "./initial-cards.js";
import { Card } from "./card.js";
import { FormValidator } from "./formValidator.js";

//Объявление констант
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__description");
const nameInput = document.querySelector("#inputName");
const descriptionInput = document.querySelector("#inputDescription");
const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup_type_editprofile");
const popupAddPlace = document.querySelector(".popup_type_addplace");
const addPlaceButton = document.querySelector(".profile__add-button");
const addCardForm = document.querySelector("#addPlaceForm");
const popupCloseButtons = document.querySelectorAll(".popup__close");
const elementsList = document.querySelector(".elements__list");
const newPlaceName = document.querySelector("#inputPlaceName");
const newPictureLink = document.querySelector("#inputPictureLink");

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const addProfileValidator = new FormValidator(
  validationSettings,
  popupAddPlace
);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(
  validationSettings,
  popupEditProfile
);
editProfileValidator.enableValidation();

function createCards(item) {
  const card = new Card(item, "#elements__template");
  const cardElement = card.generateCard();
  elementsList.prepend(cardElement);
}

initialCards.forEach((element) => {
  createCards(element);
});

//Функция открытия попапа редактирования профиля
function openPopupEditProfile() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileInfo.textContent;
  editProfileValidator.deleteInputError();
  openPopup(popupEditProfile);
}

//Функция сохранения редактирования профиля с отменой отправки данных на сервер
function submitEditProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = descriptionInput.value;
  closePopup(popupEditProfile);
}

//Функция сохранения новой карточки с отменой отправки данных на сервер
function submitNewElement(event) {
  event.preventDefault();
  const newCard = { name: newPlaceName.value, link: newPictureLink.value };
  createCards(newCard);
  closePopup(popupAddPlace);
}

//Функция закрытия открытого попапа
function closeOpenedPopup() {
  const openedPopup = document.querySelector(".popup_opened");
  closePopup(openedPopup);
}

//Функция закрытия попапов кликом на оверлей
function closePopupWithOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeOpenedPopup();
  }
}

//Функция закрытия попапов на клавишу Esc
function closePopupWithEscape(evt) {
  if (evt.key === "Escape") {
    closeOpenedPopup();
  }
}

//Функция добавления класса открытия попапа
function openPopup(popup) {
  popup.addEventListener("click", closePopupWithOverlay);
  document.addEventListener("keydown", closePopupWithEscape);
  //editProfileValidator.deleteInputError();
  popup.classList.add("popup_opened");
}

//Функция удаления класса открытия попапа
function closePopup(popup) {
  popup.removeEventListener("click", closePopupWithOverlay);
  document.removeEventListener("keydown", closePopupWithEscape);
  popup.classList.remove("popup_opened");
}

//Функция закрытия попапов без сохранения изменений
popupCloseButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

//Добавление слушателей событий
editButton.addEventListener("click", openPopupEditProfile);
addPlaceButton.addEventListener("click", () => {
  addCardForm.reset();
  addProfileValidator.deleteInputError();
  //switchSubmitButtonState(popupAddNewPlace, popupAddSubmitButton);
  openPopup(popupAddPlace);
});
popupEditProfile.addEventListener("submit", submitEditProfile);
popupAddPlace.addEventListener("submit", submitNewElement);

export { openPopup };
