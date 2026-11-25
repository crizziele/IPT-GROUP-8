const signInTab = document.getElementById("signInTab");
const signUpTab = document.getElementById("signUpTab");
const signInPanel = document.getElementById("signInPanel");
const signUpPanel = document.getElementById("signUpPanel");
const message = document.getElementById("message");

function showTab(tab) {
  const isSignIn = tab === "signin";

  signInTab.classList.toggle("active", isSignIn);
  signUpTab.classList.toggle("active", !isSignIn);
  signInTab.setAttribute("aria-selected", String(isSignIn));
  signUpTab.setAttribute("aria-selected", String(!isSignIn));
  signInPanel.hidden = !isSignIn;
  signUpPanel.hidden = isSignIn;
  message.style.display = "none";
}

signInTab.addEventListener("click", () => showTab("signin"));
signUpTab.addEventListener("click", () => showTab("signup"));

document.getElementById("signInForm").addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent =
    "Sign-in form submitted. Connect this form to your authentication service.";
  message.style.display = "block";
});

document.getElementById("signUpForm").addEventListener("submit", (event) => {
  event.preventEventDefault?.();
  event.preventDefault();

  const password = document.getElementById("signUpPassword").value;
  const confirmation = document.getElementById("confirmPassword").value;

  if (password !== confirmation) {
    message.textContent =
      "The passwords do not match. Please try again.";
    message.style.display = "block";
    return;
  }

  message.textContent =
    "Sign-up form submitted. Connect this form to your account service.";
  message.style.display = "block";
});

document.getElementById("forgotPassword").addEventListener("click", (event) => {
  event.preventDefault();
  message.textContent =
    "Please contact your system administrator to reset your password.";
  message.style.display = "block";
});