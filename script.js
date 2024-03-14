document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy login check
    if (username === "admin" && password === "password") {
      document.getElementById("message").innerText = "Login successful!";
    } else {
      document.getElementById("message").innerText =
        "Invalid username or password";
    }
  });

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Dummy sign-up check
    if (password !== confirmPassword) {
      document.getElementById("message").innerText = "Passwords do not match";
    } else {
      document.getElementById("message").innerText = "Sign up successful!";
    }
  });
