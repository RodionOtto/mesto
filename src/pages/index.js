import "../pages/index.css";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  initialCards,
  profileInputName,
  profileInputDescription,
  editButton,
  popupEdit,
  popupAddPlace,
  addPlaceButton,
  userConfig,
  addPopupSelector,
  addCardForm,
  editProfilePopup,
  editProfileForm,
  imagePopupSelector,
  increasedImage,
  increasedElementCaption,
  cardLink,
  cardTitle,
  validationSettings,
} from "../utils/constants.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

// Открытие попапа карточки
const popupWithImage = new PopupWithImage(
  imagePopupSelector,
  increasedImage,
  increasedElementCaption
);
popupWithImage.setEventListeners();

// Данные профиля
const { nameSelector, descriptionSelector } = userConfig;
const userInfo = new UserInfo(nameSelector, descriptionSelector);

//Попап редактирования профиля
const popupEditProfile = new PopupWithForm(
  editProfilePopup,
  editProfileForm,
  (formValues) => {
    userInfo.setUserInfo(formValues);
    popupEditProfile.close();
  }
);
popupEditProfile.setEventListeners();

editButton.addEventListener("click", () => {
  const { name, description } = userInfo.getUserInfo();
  profileInputName.value = name;
  profileInputDescription.value = description;
  editProfileValidator.deleteInputError();
  popupEditProfile.open();
});

//Попап добавления карточки
const popupAddImage = new PopupWithForm(
  addPopupSelector,
  addCardForm,
  (item) => {
    newCardList.addItem(createCard(item));
    popupAddImage.close();
  }
);
popupAddImage.setEventListeners();

addPlaceButton.addEventListener("click", () => {
  addProfileValidator.deleteInputError();
  popupAddImage.open();
});

const createCard = (item) => {
  const card = new Card(
    {
      name: item.cardTitle,
      link: item.cardLink,
      handleCardClick: () => {
        popupWithImage.open(item.cardTitle, item.cardLink);
      },
    },
    "#elements__template"
  );
  return card.generateCard();
};

// Добавление карточек по умолчанию
const newCardList = new Section(
  {
    items: initialCards,
    renderer: (element) => {
      newCardList.addItem(createCard(element));
    },
  },
  ".elements__list"
);

newCardList.renderItems();

//Валидаторы попапов
const addProfileValidator = new FormValidator(
  validationSettings,
  popupAddPlace
);
addProfileValidator.enableValidation();

const editProfileValidator = new FormValidator(validationSettings, popupEdit);
editProfileValidator.enableValidation();

/*const addProfileValidator = new FormValidator(
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
*/
