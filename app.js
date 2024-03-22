// This function is wrapped in an immediately invoked function expression (IIFE)
// to encapsulate the code and prevent polluting the global scope.

(function () {
  // Get reference to the screen element using its class name
  let screen = document.querySelector(".screen");

  // Get references to all buttons using their class name
  let buttons = document.querySelectorAll(".btn");

  // Get reference to the clear button
  let clear = document.querySelector(".btn-clear");

  // Get reference to the equal button
  let equal = document.querySelector(".btn-equal");

  // Loop through each button
  buttons.forEach(function (button) {
    // Add click event listener to each button
    button.addEventListener("click", function (e) {
      // Retrieve the value of the clicked button using the 'data-num' attribute
      let value = e.target.dataset.num;

      // Check if the value is not undefined
      if (value !== undefined) {
        // Log the value of the clicked button
        console.log("Clicked button:", value);

        // Append the clicked button's value to the screen
        screen.value += value;
      }
    });
  });

  // Add click event listener to the equal button
  equal.addEventListener("click", function (e) {
    // Check if the screen value is empty
    if (screen.value === "") {
      // Display a message if the screen is empty
      screen.value = "Please enter";
    } else {
      // Try to evaluate the expression entered in the screen
      try {
        // Log the expression before evaluation
        console.log("Before eval:", screen.value);

        // Evaluate the expression and store the result
        let answer = eval(screen.value);

        // Log the result after evaluation
        console.log("After eval:", answer);

        // Check if the result is NaN or Infinity
        if (isNaN(answer) || !isFinite(answer)) {
          // Display an error message if the result is invalid
          screen.value = "Invalid input";
        } else {
          // Display the result on the screen if it's valid
          screen.value = answer;
        }
      } catch (error) {
        // Catch and log any errors that occur during evaluation
        console.error(error);

        // Display an error message on the screen
        screen.value = "Error";
      }
    }
  });

  // Add click event listener to the clear button
  clear.addEventListener("click", function (e) {
    // Clear the screen when the clear button is clicked
    screen.value = "";
  });
})();
