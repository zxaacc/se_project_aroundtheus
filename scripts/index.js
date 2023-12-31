const initialCards = [
  {
    name: "Beaver Dam",
    link: "https://unsplash.com/photos/silhouette-of-trees-near-body-of-water-during-sunset-lsoogGC_5dg",
  },
  {
    name: "Trillium Lake",
    link: "https://unsplash.com/photos/purple-flowers-near-lake-and-snow-covered-mountain-during-daytime-fbW_BcWLBUw",
  },
  {
    name: "Mount Reinier",
    link: "https://unsplash.com/photos/a-view-of-a-snow-covered-mountain-from-a-distance-FbXBVwY9g7Y",
  },
  {
    name: "Denali Park",
    link: "https://unsplash.com/photos/a-group-of-mountains-with-snow-on-them-ZqZikxJ6R20",
  },
  {
    name: "Grand Teton",
    link: "https://unsplash.com/photos/brown-and-white-mountains-under-blue-sky-during-daytime-0Q4vVmx_PV8",
  },
  {
    name: "Bozeman",
    link: "https://unsplash.com/photos/brown-field-near-mountains-under-white-clouds-during-daytime-cWFlYyJp2PE",
  },
];

console.log(initialCards);

const profileEditButton = document.querySelector("#profile__edit-button");
const profileModal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(
  "#modal__container_close-button"
);
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = document.querySelector(".modal__container_name");
const profileDescriptionInput = document.querySelector(
  ".modal__container_description"
);
const profileEditForm = profileModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card_template").content.firstElementChild;
const cardListElement = document.querySelector(".cards__list");

function closeModal() {
  profileModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTextElement = cardElement.querySelector(".card__text");
  cardImageElement.src = cardData.link;
  cardTextElement.alt = cardData.name;
  cardTextElement.textContent = cardData.name;

  return cardElement;
}

profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileModal.classList.add("modal_opened");
});
modalCloseButton.addEventListener("click", () => {
  profileModal.classList.remove("modal_opened");
});

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal();
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListElement.append(cardElement);
});
