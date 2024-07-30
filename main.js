const form = document.querySelector('form');
const usernameInput = form.elements.username;

form.addEventListener("submit", (event) => event.preventDefault());

const customValidationUsernameHandler = (event) => {
  event.target.setCustomValidity("");
  
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Wajib diisi !");
    return;
  }
  if (event.target.validity.tooShort) {
    event.target.setCustomValidity("Minimal Panjang adalah 6 karakter !");
    return;
  }
  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity(
      "Tidak boleh diawali dengan simbol, mengandung white space atau spasi, dan mengandung karakter spesial seperti dolar ($) !"
    );
    return;
  }
};

usernameInput.addEventListener('change', customValidationUsernameHandler);
usernameInput.addEventListener('invalid', customValidationUsernameHandler);

usernameInput.addEventListener('blur', (event) => {
    
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage;

    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidationEl = connectedValidationId ? document.getElementFById(connectedValidationId) : null;

    if(connectedValidationEl && errorMessage && !isValid){
        connectedValidationEl.innerText = errorMessage;
    } else{
        connectedValidationEl.innerText = '';
    }
});