const phone_number = document.getElementById('phone_number');

phone_number.addEventListener("input", (_event) => {
    if (phone_number.validity.patternMismatch) {
        phone_number.setCustomValidity("Please enter a valid phone number");
    } else {
        phone_number.setCustomValidity("");
    }
});