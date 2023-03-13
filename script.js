document.addEventListener("DOMContentLoaded", function(event) {
    function handleTask(elementId) {
      // Find the element by ID
      var element = document.getElementById(elementId);
  
      // Create a new element to display the message
      var message = document.createElement("p");
      message.innerHTML = "Done";
      message.style.fontSize = "12pt";
      message.style.color = "green";
  
      // Append the message to the calling element
      element.appendChild(message);
    }
  });
  