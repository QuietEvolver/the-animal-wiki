$(document).ready(function() {

  var animals = prompt("Where is tile?"));

    if (animal === "turtles") {   // if turtles
      displayTurtles();           // call the function to display turtles.
    }
    else if (animal === "snakes") {             // if snakes...
      displaySnakes();                       // display snakes
    }
    else {          // if all the other options not chosen/fail...
      displayInsects();       // display insects
    }

});
