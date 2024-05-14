export default class FormValidator {
  constructor(config, formElement) {
    this._form = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  _showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
    this._errorMessageEl = this._querySelector("#" + inputEl.id + "-error");
    inputEl.classList.add(this._form.inputErrorClass);
    this._errorMessageEl.textContent = inputEl.validationMessage;
    this._errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = this._querySelector("#" + inputEl.id + "-error");
    inputEl.classList.remove(this._inputErrorClass);
    this._errorMessageEl.textContent = "";
    this._errorMessageEl.classList.remove(this._errorClass);
  }

  _checkInputValidity(formEl, inputEl, options) {
    console.log(inputEl);
    if (!this._inputEl.validity.valid) {
      this._showInputError(formEl, inputEl, options);
    } else {
      this._hideInputError(formEl, inputEl, options);
    }
  }

  _hasInvalidInput(inputList) {
    return !this._inputEls.every((inputEl) => inputEl.validity.valid);
  }

  // Expand paramater list to include inactiveButtonClass
  _disableModalSaveButton(submitButton, { inactiveButtonClass }) {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enableModalSaveButton(submitButton, { inactiveButtonClass }) {
    this._submitButton.classList.remove(inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
    let foundInvalid = false;
    inputEls.forEach((inputEl) => {
      if (!inputEl.validity.valid) {
        foundInvalid = true;
      }
    });

    if (this._hasInvalidInput(this._inputEls)) {
      this._disableModalSaveButton(submitButton, { inactiveButtonClass });
    } else {
     this.enableModalSaveButton(submitButton, { inactiveButtonClass });
    }
  }

  _setEventListeners(formEl, options) {
    const { inputSelector, submitButtonSelector } = options;
    this._inputEls = [...formEl.querySelectorAll(inputSelector)];
    this._submitButton = formEl.querySelector(submitButtonSelector);
    this._toggleButtonState(this._inputEls, this._submitButton, options);
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(formEl, inputEl, options);
        this._toggleButtonState(inputEls, submitButton, options);
      });
    });
  }

  enableValidation(options) {
    const formEls = [...document.querySelectorAll(options.formSelector)];
    formEls.forEach((formEls) => {
      formEls.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      this._setEventListeners(formEls, options);
      this._submitButton = formEls.querySelector(options.submitButtonSelector);
    });
  }

  disbaleButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }
}