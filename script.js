const phone_number = document.getElementById('phone_number');

phone_number.addEventListener("input", (_event) => {
    if (phone_number.validity.patternMismatch) {
        phone_number.setCustomValidity("Please enter a valid phone number");
    } else {
        phone_number.setCustomValidity("");
    }
});


const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

password.addEventListener("input", (_event) => {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity("");
    }
});