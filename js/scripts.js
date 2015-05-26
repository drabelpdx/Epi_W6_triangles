var triangle = function(side) {
  if ((isNaN(side[0])) || (isNaN(side[1])) || (isNaN(side[2]))) {
    return 'are invalid. Please only enter numbers';
  } else if ((side[0] === side[1]) && (side[1] === side[2])) {
    return 'make an equilateral triangle';
  } else if (((side[0] + side[1]) < side[2]) || ((side[1] + side[2]) < side[0]) || ((side[2] + side[0]) < side[1])) {
    return 'do not make a triangle';
  } else if ((side[0] === side[1] && side[1] !== side[2]) ||(side[1] == side[2] && side[2] !== side[0])) {
    return 'make an isoceles triangle';
  } else if ((side[0] !== side[1]) && (side[1] !== side[2]) && (side[0] !== side[2])) {
    return 'make a scalene triangle';
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1s = ($("input#side1").val());
    var side2s = ($("input#side2").val());
    var side3s = ($("input#side3").val());
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var sides_s = (side1s + ", " + side2s + ", " + side3s)
    var sides = [side1, side2, side3];
    var result = triangle(sides);

    $(".result").text(result);
    $(".sides").text(sides_s);

    $("#result").show();
    event.preventDefault();

  });
});
