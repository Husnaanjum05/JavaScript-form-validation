// Get all form input elements
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Get error display elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Validate on submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  let isValid = true;

  // Name Validation
  if (nameInput.value.trim().length < 5) {
    nameError.textContent = "Name must be at least 5 characters long.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Phone Validation
  const phone = phoneInput.value.trim();
  if (phone.length !== 10 || phone === "123456789" || isNaN(phone)) {
    phoneError.textContent = "Enter a valid 10-digit phone number.";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  // Password Validation
  const password = passwordInput.value;
  const name = nameInput.value.trim().toLowerCase();

  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password.toLowerCase() === name
  ) {
    passwordError.textContent = "Password must be strong and not predictable.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Confirm Password
  if (password !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  // If all validations pass
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset(); // Optionally clear form
  }
});
