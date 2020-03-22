//LEVEL 1

//Question 1
var brand = "nike";

//Question 2
var person = {
  name: "Andy",
  age: 28
};

//Question 3
var outOfStock = true;
if (outOfStock) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

//Question 4
var numbers = [7, 9, 19, 28, 31];
for (var i = 0; i < numbers; i++) {
  console.log(numbers[i]);
}

//Question 5
for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// Question 6
for (var i = 15; i <= 25; i++) {
  console.log((i = 20));
}

//Question 7
var myCats = [
  {
    name: "Goku",
    age: 5,
    facts: true
  },
  {
    name: "Vegeta",
    age: 7,
    facts: false
  }
];
for (var i = 0; i < myCats.length; i++) {
  console.log(myCats[i].age);
  console.log(myCats[i].facts);
}

//Question 8
function whatIDontLike(covid19) {
  console.log("I don't like the coronavirus");
}
whatIDontLike();

//Question 9
function favoriteNumber(numberOne, numberTwo) {
  var total = numberOne + numberTwo;
  console.log(numberOne - numberTwo);
}
favoriteNumber(5, 4);

//Question 10
var anime = ["Goku"];
function animeName(name) {
  var anime = ["Goku"];
  console.log("Goku");
}
animeName();
