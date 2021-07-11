//Массив с карточками по умолчанию
export const initialCards = [
  {
    placename: "Архыз",
    picturelink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    placename: "Челябинская область",
    picturelink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    placename: "Иваново",
    picturelink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    placename: "Камчатка",
    picturelink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    placename: "Холмогорский район",
    picturelink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    placename: "Байкал",
    picturelink:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//Объявление констант
export const editButton = document.querySelector(".profile__edit-button");
export const deletePopupButton = document.querySelector(
  ".elements__delete-button"
);
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
export const deletePopupSelector = ".popup_type_card-delete";
export const addCardForm = "#addPlaceForm";
export const deleteCardForm = "#popup-delete";
export const imagePopupSelector = ".popup_type_increasedcard";
export const placename = document.querySelector("form__input[name=placename]");
export const picturelink = document.querySelector(
  "form__input[name=picturelink]"
);

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

export const apiData = {
  url: "https://mesto.nomoreparties.co/v1/cohort-25/",
  token: "476060d2-67ac-43d3-a992-71a7e3ed7303",
};
