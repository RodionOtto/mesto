//Массив с карточками по умолчанию
export const initialCards = [
  {
    cardTitle: "Архыз",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    cardTitle: "Челябинская область",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    cardTitle: "Иваново",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    cardTitle: "Камчатка",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    cardTitle: "Холмогорский район",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    cardTitle: "Байкал",
    cardLink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//Объявление констант
export const editButton = document.querySelector(".profile__edit-button");
export const popupEdit = document.querySelector(".popup_type_editprofile");
export const nameInput = document.querySelector("#inputName");
export const descriptionInput = document.querySelector("#inputDescription");
export const popupAddPlace = document.querySelector(".popup_type_addplace");
export const addPlaceButton = document.querySelector(".profile__add-button");
export const popupCloseButtons = document.querySelectorAll(".popup__close");
export const elementsList = document.querySelector(".elements__list");
export const newPlaceName = document.querySelector("#inputPlaceName");
export const newPictureLink = document.querySelector("#inputPictureLink");
export const profileInputName = document.querySelector("#inputName");
export const profileInputDescription = document.querySelector(
  "#inputDescription"
);
export const cardListSection = ".elements__list";
export const popupCloseBtn = ".popup__close";
export const editProfilePopup = ".popup_type_editprofile";
export const editProfileForm = "#editForm";
export const addPopupSelector = ".popup_type_addplace";
export const addCardForm = "#addPlaceForm";
export const imagePopupSelector = ".popup_type_increasedcard";
export const cardTitle = document.querySelector("form__input[name = cardTitle");
export const cardLink = document.querySelector("form__input[name = cardLink");

export const userConfig = {
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__description",
};

export const increasedImage = document.querySelector(".increasedcard__image");
export const increasedElementCaption = document.querySelector(
  ".increasedcard__alt"
);

export const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};
