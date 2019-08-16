$(document).ready(function() {

  //var animals = prompt("Where is tile?"));
var selectedAnimal =
$("select#animal").submit(function(){
    $(this).children("option:selected").val();

    var displayTurtles = $('#animal').val("turtles");
    var displaySnakes = $('#animal').val("snakes");
    var displayInsects = $('#animal').val("insects");

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

});
