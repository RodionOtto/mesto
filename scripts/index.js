let editButton = document.querySelector(".profile__edit-button");
let closePopupButton = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");

let profileName = document.querySelector(".profile__name");
let profileInfo = document.querySelector(".profile__description");

let formElement = document.querySelector("#editForm");

let nameInput = document.querySelector("#inputName");
let descriptionInput = document.querySelector("#inputDescription");

function formSubmitHandler(evt) {
  evt.preventDefault();
  closePopup();
  profileName.textContent = nameInput.value;
  profileInfo.textContent = descriptionInput.value;
}

function openPopup() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileInfo.textContent;
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

formElement.addEventListener("submit", formSubmitHandler);
