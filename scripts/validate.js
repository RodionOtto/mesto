//Функция добавления ошибки
const visibleInputError = (formElement, inputElement, errorMessage) => {
  const errorInput = formElement.querySelector(`#${inputElement.id}-error`);
  const { inputErrorClass, errorClass } = validationSettings;
  inputElement.classList.add(inputErrorClass);
  errorInput.textContent = errorMessage;
  errorInput.classList.add(errorClass);
};

//Функция удаления ошибки
const invisibleInputError = (formElement, inputElement) => {
  const { inputErrorClass, errorClass } = validationSettings;
  const errorInput = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorInput.classList.remove(errorClass);
  errorInput.textContent = "";
};

//Функция, показывающая или скрывающая ошибку
const isValid = (formElement, inputElement, validationSettings) => {
  if (!inputElement.validity.valid) {
    visibleInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      validationSettings
    );
  } else {
    invisibleInputError(formElement, inputElement, validationSettings);
  }
};

//Определение невалидного инпута
const invalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//Функция изменения состояния кнопки сабмита в попапах
function switchSubmitButtonState(inputList, buttonElement) {
  const { inactiveButtonClass } = validationSettings;
  if (invalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

//Функция добавления слушателей событий для всех инпутов, нахождения всех инпутов и сабмитов
const settingsForInputs = (formElement, validationSettings) => {
  const {
    inputSelector,
    submitButtonSelector,
    ...restConfig
  } = validationSettings;
  const buttonElement = formElement.querySelector(submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  switchSubmitButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, restConfig);
      switchSubmitButtonState(inputList, buttonElement);
    });
  });
};

//Функция включения валидации
const enableValidation = (validationSettings) => {
  const { formSelector, ...restConfig } = validationSettings;
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    settingsForInputs(formElement, restConfig);
  });
};

//Определение классов и селекторов, необходимых для валидации
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

//Вызов валидации
enableValidation(validationSettings);
