const emailInput = document.forms["emailForm"]["email"];
const emailSubmit = document.forms["emailForm"]["emailSubmit"];
const errorIcon = document.querySelector(".error");
const errorMessage = document.querySelector(".errorMessage");

emailSubmit.addEventListener("click", function(event) {
  if (emailInput.value === "" || !validateEmail(emailInput.value)) {
    event.preventDefault(); // Prevent the form from submitting
    errorIcon.style.visibility = "visible";
    errorMessage.style.visibility = "visible";
    emailInput.style.borderColor = "var(--Soft-Red)";
  } else {
    errorIcon.style.visibility = "hidden";
    errorMessage.style.visibility = "hidden";
    emailInput.style.borderColor = "Black";
  }
});

function validateEmail(email) {
  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}