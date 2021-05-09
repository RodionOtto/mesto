//Объявление констант
const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__description");
const nameInput = document.querySelector("#inputName");
const descriptionInput = document.querySelector("#inputDescription");
const editButton = document.querySelector(".profile__edit-button");
const popupEditProfile = document.querySelector(".popup__profile");

const popupAddPlace = document.querySelector(".popup__addplace");
const addPlaceButton = document.querySelector(".profile__add-button");
const placeNameInput = document.querySelector("#inputPlaceName");
const pictureLinkInput = document.querySelector("#inputPictureLink");

const elementsTemplate = document.querySelector("#elements__template").content;
const elementsList = document.querySelector(".elements__list");
const popupIncreased = document.querySelector(".popup__increasedcard");

const popupCloseButton = document.querySelectorAll(".popup__close");

//Массив с карточками по умолчанию
const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

initialCards.forEach((element) => {
  elementsList.prepend(createElements(element));
});

//Функция закрытия попапов без сохранения изменений
popupCloseButton.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

//Функция создания новой карточки
function createElements(element) {
  const newElement = elementsTemplate
    .querySelector(".elements__card")
    .cloneNode(true);
  const elementHeader = newElement.querySelector(".elements__header");
  elementHeader.textContent = element.name;
  const elementImage = newElement.querySelector(".elements__image");
  elementImage.src = element.link;
  elementImage.alt = element.name;
  newElement
    .querySelector(".elements__image")
    .addEventListener("click", increasedCard);
  newElement
    .querySelector(".elements__like-button")
    .addEventListener("click", likeElement);
  newElement
    .querySelector(".elements__delete-button")
    .addEventListener("click", deleteElement);

  return newElement;
}

//Функция лайка карточки
function likeElement(event) {
  event.target.classList.toggle("elements__like-button_active");
}

//Функция удаления карточки
function deleteElement(event) {
  event.target.closest(".elements__card").remove();
}

//Функция открытия карточки
function increasedCard(event) {
  const increasedImage = popupIncreased.querySelector(".increasedcard__image");
  increasedImage.src = event.target.src;
  increasedImage.alt = event.target.alt;
  const IncreasedElementCaption = popupIncreased.querySelector(
    ".increasedcard__alt"
  );
  IncreasedElementCaption.textContent = event.target.alt;
  openPopup(popupIncreased);
}

//Функция открытия попапа редактирования профиля
function openPopupEditProfile() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileInfo.textContent;
  openPopup(popupEditProfile);
}

//Функция сохранения редактирования профиля с отменой отправки данных на сервер
function editProfileSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = descriptionInput.value;
  closePopup(popupEditProfile);
}

//Функция открытия попапа добавления новой карточки
function openPopupAddPlace() {
  placeNameInput.value = "";
  pictureLinkInput.value = "";
  openPopup(popupAddPlace);
}

//Функция сохранения новой карточки с отменой отправки данных на сервер
function newElementSubmit(event) {
  event.preventDefault();
  const newPlaceName = document.querySelector("#inputPlaceName");
  const newPictureLink = document.querySelector("#inputPictureLink");
  const newCard = { name: newPlaceName.value, link: newPictureLink.value };
  elementsList.prepend(createElements(newCard));
  closePopup(popupAddPlace);
}

//Функция добавления класса открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//Функция удаления класса открытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//Добавление слушателей событий
editButton.addEventListener("click", openPopupEditProfile);
addPlaceButton.addEventListener("click", openPopupAddPlace);
popupEditProfile.addEventListener("submit", editProfileSubmit);
popupAddPlace.addEventListener("submit", newElementSubmit);
