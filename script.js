document.getElementById('exampleForm').addEventListener('submit', function(event) {
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var isFormValid = true;

    // Reset custom validation messages
    usernameInput.setCustomValidity('');
    emailInput.setCustomValidity('');

    // Check if the username input is valid
    if (!usernameInput.checkValidity()) {
        document.getElementById('usernameError').textContent = usernameInput.validationMessage;
        isFormValid = false;
    } else {
        document.getElementById('usernameError').textContent = '';
    }

    // Check if the email input is valid
    if (!emailInput.checkValidity()) {
        document.getElementById('emailError').textContent = emailInput.validationMessage;
        isFormValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Prevent form submission if any input is invalid
    if (!isFormValid) {
        event.preventDefault();
    }
});
