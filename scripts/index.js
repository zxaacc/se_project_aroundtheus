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

profileEditButton.addEventListener("click", () => {
  profileModal.classList.add("modal_opened");
});
modalCloseButton.addEventListener("click", () => {
  profileModal.classList.remove("modal_opened");
});
