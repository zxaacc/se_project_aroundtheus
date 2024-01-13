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
const profileModal = document.querySelector(".modal");
const modalCloseButton = document.querySelector("#modal__container-closeBtn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = document.querySelector(".modal__form-name");
const profileDescriptionInput = document.querySelector(
  ".modal__form-description"
);
const profileEditForm = profileModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card_template").content.firstElementChild;
const cardListElement = document.querySelector(".cards__list");

const profileAddModal = document.querySelector("#add__button-modal");
const profileAddButton = document.querySelector("#profile__add-button");
const addModalCloseButton = document.querySelector(
  "#addModal__container-closeBtn"
);
const addModalForm = document.querySelector("#modal__form-add");
const addFormCardTitleInput = addModalForm.querySelector("#modal__form-title");
const addFormCardUrlInput = addModalForm.querySelector("#modal__form-URL");

function closeModal() {
  document.querySelector(".modal_opened").classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTextElement = cardElement.querySelector(".card__text");
  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTextElement.textContent = cardData.name;

  return cardElement;
}

function addModalFormSubmit(evt) {
evt.preventDefault();
const name = addFormCardTitleInput.value;
const link = addFormCardUrlInput.value;
renderCard({name, link }, cardListElement);
closeModal();
};

function renderCard(cardData, wrapper) {
 const cardElement = getCardElement(cardData);
 wrapper.prepend(cardElement);
};

addModalForm.addEventListener("submit", addModalFormSubmit);

profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileModal.classList.add("modal_opened");
});

modalCloseButton.addEventListener("click", () => {
  closeModal();
});

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal();
});

initialCards.forEach((cardData) => renderCard (cardData, cardListElement));

// initialCards.forEach((cardData) => {
//   const cardElement = getCardElement(cardData);
//   cardListElement.append(cardElement);
// });

profileAddButton.addEventListener("click", (addModalFormSubmit) => {
  profileAddModal.classList.add("modal_opened");
});

addModalCloseButton.addEventListener("click", () => {
  closeModal();
});
