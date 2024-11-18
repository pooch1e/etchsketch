//change ratio button
let gridSize;

function changeRatio () {
    $(".button").click(() => {
        gridSize = prompt("How big is your sketch pad? (max 100)");
        gridSize = parseInt(gridSize, 10);

        // Validate gridSize
        if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;

    };
    createGrid(gridSize);

});
};


function createGrid(size) {

//Grid and DIVS
//add divs
$(".container").empty(); // Clear any existing squares

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Initialize new div element for each square
      let square = $("<div class='square'></div>");
      $(".container").append(square);

      // Add hover effect
      square.hover(function () {
        $(this).addClass("hover");
      });
    }
  }
}

// Add hover effect globally
$(".container").on("mouseenter", ".square", function () {
  $(this).addClass("hover");
});

// Remove hover effect after timer
$(".container").on("mouseleave", ".square", function () {
  const square = $(this);
  setTimeout(function () {
    $(square).removeClass('hover');
  }, 2000);
});
// Add hover effect
// $(".container").on("mouseenter", ".square", function () {
//     $(this).addClass("hover");

//   });
//   //remove squares after timer
//   $(".container").on("mouseleave", ".square", function () {
//     const square = $(this);
//     setTimeout(function() {
//         $(square).removeClass('hover');
//       }, 2000);

//   });




changeRatio();