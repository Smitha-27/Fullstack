function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    if (email == "") {
      alert("Email must be filled out");
      return false;
    } else if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return false;
    }
  
    if (message == "") {
      alert("Message must be filled out");
      return false;
    }
  
    return true;
  }