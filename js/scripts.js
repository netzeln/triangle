var side1;
var side2;
var side3;

var isTriangle = function(side1, side2, side3){
  if (defTriangle(side1, side2, side3)){
    console.log(typeTriangle(side1, side2, side3));
    return typeTriangle(side1, side2, side3); //return value of triangle sides
  }else{
    return "Oops, please try again. Entry was incorrect.";  //error message goes here
  }
};

var typeTriangle = function(side1, side2, side3){
  if (side1 === side2 && side1 === side3) {
    return "equilateral";
} else if (side1 === side2 && !(side1 = side3) || side2 === side3  && !(side1 === side3) || side1 === side3 && !(side2 === side3)){
    return "isoceles";
} else {
    return "scalene";
}
};

// Define what a triangle is START
var defTriangle = function(side1,side2,side3){
 return side1 <= (side2 + side3) && side2 <= (side3 + side1) && side3<= (side1 + side2);
  };
// Define what a triangle is END


$(document).ready(function() {



});
