const initialCards = [
  {
    name: "Beaver Dam",
    link: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Trillium Lake",
    link: "https://images.unsplash.com/photo-1598457005804-d316ba92cab2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mount Reinier",
    link: "https://images.unsplash.com/photo-1696219364234-e726be37e134?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Denali Park",
    link: "https://images.unsplash.com/photo-1690000192856-4e2f5d10b095?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Grand Teton",
    link: "https://images.unsplash.com/photo-1624375147958-678d727cc0c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bozeman",
    link: "https://images.unsplash.com/photo-1608768557474-d4c5651d3230?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

console.log(initialCards);

const profileEditButton = document.querySelector("#profile__edit-button");
const profileModal = document.querySelector("#profile-modal");
const profileCloseButton = document.querySelector("#modal__container-closeBtn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = document.querySelector(".modal__form-name");
const profileDescriptionInput = document.querySelector(
  ".modal__form-description"
);
const profileSaveButton = document.querySelector("#modal__form-saveBtn");

const profileEditForm = document.forms.editProfileForm;
const cardTemplate =
  document.querySelector("#card_template").content.firstElementChild;
const cardListElement = document.querySelector(".cards__list");

const profileAddModal = document.querySelector("#card-modal");
const profileAddButton = document.querySelector("#profile__add-button");
const addModalCloseButton = document.querySelector(
  "#addModal__container-closeBtn"
);
const addModalForm = document.querySelector("#modal__form-add");
const addFormCardTitleInput = addModalForm.querySelector("#modal__form-title");
const addFormCardUrlInput = addModalForm.querySelector("#modal__form-URL");

function closeModal(popup) {
  popup.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscClick);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTextElement = cardElement.querySelector(".card__text");
  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTextElement.textContent = cardData.name;

  const cardLikeButton = cardElement.querySelector("#card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  const cardRemoveButton = cardElement.querySelector("#card__remove-button");
  cardRemoveButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    openModal(previewModal);
    previewModalImage.src = cardData.link;
    previewModalImage.alt = cardData.name;
    previewModalDescription.textContent = cardData.name;
  });

  return cardElement;
}

function handleAddModalFormSubmit(evt) {
  evt.preventDefault();
  const name = addFormCardTitleInput.value;
  const link = addFormCardUrlInput.value;
  renderCard({ name, link }, cardListElement);
  closeModal(profileAddModal);
  addModalForm.reset();
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscClick);
}

addModalForm.addEventListener("submit", handleAddModalFormSubmit);

profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileModal);
});

profileCloseButton.addEventListener("click", () => {
  closeModal(profileModal);
});

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileModal);
});

initialCards.forEach((cardData) => renderCard(cardData, cardListElement));

profileAddButton.addEventListener("click", (handleAddModalFormSubmit) => {
  openModal(profileAddModal);
});

addModalCloseButton.addEventListener("click", () => {
  closeModal(profileAddModal);
});

const previewModal = document.querySelector("#modal__preview");
const previewModalImage = document.querySelector("#modal__preview-image");
const previewModalDescription = document.querySelector(
  "#modal__preview-description"
);
const previewModalCloseBtn = document.querySelector("#modal__preview-closeBtn");
const cardDescription = document.querySelector(".card__text");
previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal(e.target);
    }
  });
});

function handleEscClick(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}
