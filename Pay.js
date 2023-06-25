document.addEventListener('DOMContentLoaded', function () {
    const firstNameInput = document.getElementById("firstNameInput");
    const lastNameInput = document.getElementById("lastNameInput");
    const addressInput = document.getElementById("addressInput");
    const postalCodeInput = document.getElementById("postalCodeInput");
    const cityInput = document.getElementById("cityInput");
    const countryInput = document.getElementById("countryInput");
    const genderInput = document.getElementById("maleRadio");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");
    const cashbutton = document.getElementById("cashbutton");
    const idNumberInput = document.getElementById("idNumberInput");
  const creditCardInput = document.getElementById("creditCardInput");
  const expiredDateInput = document.getElementById("expiredDateInput");
  const cvvInput = document.getElementById("cvvInput");

    cashbutton.addEventListener('click', function () {
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const address = addressInput.value.trim();
      const postalCode = postalCodeInput.value.trim();
      const city = cityInput.value.trim();
      const country = countryInput.value.trim();
      const gender = genderInput.checked ? 'Male' : 'Female';
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
      const idNumber = idNumberInput.value.trim();
    const creditCardNumber = creditCardInput.value.trim();
    const expiredDate = expiredDateInput.value;
    const cvv = cvvInput.value.trim();

      if (firstName === '') {
        alert("You have to fill up your first name");
      } else if (lastName === '') {
        alert("You have to fill up your last name");
      } else if (address === '') {
        alert("You have to fill up your address");
      } else if (city === '') {
        alert("You have to fill up your city");
      } else if (country === '') {
        alert("You have to fill up your country");
      } else if (phone === '' || isNaN(phone) || phone.length !== 7) {
        alert("Phone number error");
      } else if (postalCode === '' || isNaN(postalCode)) {
        alert("Postal code must consist only of numbers");
      } else if (email === '' || !email.includes('@')) {
        alert("Incorrect email address");
      } else if (idNumber === '' || isNaN(idNumber) || idNumber.length !== 9) {
        alert("ID number must consist of 9 digits");
      } else if (creditCardNumber === '' || isNaN(creditCardNumber) || creditCardNumber.length !== 16) {
        alert("Credit card number must consist of 16 digits");
      } else if (cvv === '' || isNaN(cvv) || cvv.length !== 3) {
        alert("CVV must consist of 3 digits");
      } else if (new Date(expiredDate) < new Date()) {
        alert("Please select a valid expiration date");
      } else {
        // All fields are filled correctly, proceed with further actions
        // For example, you can redirect the user to another page using:
        window.location.href = 'homePage.html';
      }
    });
  });