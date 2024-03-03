export default class Card {
    constructor({name, link}, cardSelector){
        this._name = name;
        this._link = link;
        this._cardSelector =  cardSelector;
    }

    _setEventListeners(){
       //"#card__like-button"
     this._cardElement.querySelector("#card__like-button").addEventListener("click", () => {
        this._handleLikeButton();
     });
       //"#card__remove-button"
    this._cardElement.querySelector("#card__remove-button").addEventListener("click", () => {
        this._handleDeleteCard();
    });
    }

    _handleLikeButton(){
        this._cardElement.querySelector("#card__like-button").classList.toggle("card__like-button_active")
    }

    _handleDeleteCard(){
        this._cardElement.remove();
        this._cardElement = null;
    }

    getView() {
        this._cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
     //get the card view

     //set event listeners
     this._setEventListeners()
     return this._cardElement;
    }
}

