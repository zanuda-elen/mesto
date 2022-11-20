const container = document.querySelector('.content');
const editContainer = container.querySelector('.profile__editContainer');

const popupElement = document.querySelector('.popup');
const closeButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__editButton');

/*событие Popup*/
const openPopup = function() {
    popupElement.classList.add('popup_opened');
}

const closePopup = function() {
  popupElement.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
closeButtonElement.addEventListener('click', closePopup);


/*событие Submit*/
let formElement = popupElement.querySelector('.popup__content');
let nameInput = popupElement.querySelector('.popup__input_name');
let jobInput  = popupElement.querySelector('.popup__input_profession');

function formSubmitHandler(evt) {
  evt.preventDefault();
  let fullName = editContainer.querySelector('.profile__fullName');
  let profession = editContainer.querySelector('.profile__profession');
  fullName.textContent = nameInput.value;
  profession.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

