(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      if (value !== undefined) {
        console.log("Clicked button:", value);
        screen.value += value;
      }
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Please enter";
    } else {
      try {
        console.log("Before eval:", screen.value);
        let answer = eval(screen.value);
        console.log("After eval:", answer);
        if (isNaN(answer) || !isFinite(answer)) {
          screen.value = "Invalid input";
        } else {
          screen.value = answer;
        }
      } catch (error) {
        console.error(error); // Log the error to the console
        screen.value = "Error";
      }
    }
  }); /* */

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
