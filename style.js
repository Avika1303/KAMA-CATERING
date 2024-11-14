document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
 
  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Show a simple alert with the data
  alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  // Optionally, clear the form after submission
  document.getElementById("contact-form").reset();
});

