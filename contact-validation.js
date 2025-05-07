document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Clear previous error message
  document.getElementById("errorMessage").textContent = "";

  // Get values from form inputs
  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let age = document.getElementById("ageInput").value;

  // Validation checks
  if (name === "") {
    document.getElementById("errorMessage").textContent = "Name is required!";
    return; // Stop execution if validation fails
  }

  if (email === "") {
    document.getElementById("errorMessage").textContent = "Email is required!";
    return;
  }

  // Check if the email is valid using the HTML input type="email" validation
  if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
    document.getElementById("errorMessage").textContent = "Please enter a valid email!";
    return;
  }

  // Check if age is a number and within range
  if (age < 18 || age > 100) {
    document.getElementById("errorMessage").textContent = "Age must be between 18 and 100!";
    return;
  }

  // If validation passes, display the form data
  let message = `Name: ${name}<br>Email: ${email}<br>Age: ${age}`;
  document.getElementById("message").innerHTML = message;

  // Optionally, reset the form
  document.getElementById("myForm").reset();
});