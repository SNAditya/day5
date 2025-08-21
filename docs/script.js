// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from reloading page

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Dummy login validation (you can replace with backend check)
  if (username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "Login successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});
