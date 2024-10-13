// Function to move the dodger element to the right
function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
    
    // Check if the dodger is within bounds before moving
    if (left < 360) {
      // Update the left style property with the new position
      dodger.style.left = (left + 1) + 'px'; 
    }
  }
  
  // Add an event listener for DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function() {
    // Log a message to confirm the DOM is loaded
    console.log("The DOM has loaded");
  
    // Target the paragraph element with id="text" and update its text
    const textElement = document.getElementById("text");
    textElement.textContent = "This is really cool!";
  });
  
  
  