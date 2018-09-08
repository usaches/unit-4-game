//done with more JQuery

var startingNumber = Math.floor(Math.random() * (121 - 19) + 19);
var crystal1value;
var crystal2value;
var crystal3value;
var crystal4value;
var score = 0;
var wins = 0;
var losses = 0;
$("#target").text(startingNumber);

console.log(Math.floor(Math.random() * (121 - 19) + 19));

// put in functions function
function reset() {
  startingNumber = Math.floor(Math.random() * (121 - 19) + 19);
  crystal1value = Math.floor(Math.random() * (13 - 1) + 1);
  crystal2value = Math.floor(Math.random() * (13 - 1) + 1);
  crystal3value = Math.floor(Math.random() * (13 - 1) + 1);
  crystal4value = Math.floor(Math.random() * (13 - 1) + 1);
  score = 0;
 $("#target").text(startingNumber);
  $("#score").text(score);
}

reset();
$("#crystal1").on("click", function () {
  score = score + crystal1value;
  $("#score").text(score);
  $("#status").text("KEEP CLICKING!");
  if (score === startingNumber) {
    wins++;
    $("#wins").text(wins);
    $("#status").text("YOU WIN!");
    reset();
  }
  else if (score > startingNumber) {
    losses++;
    $("#losses").text(losses);
    $("#status").text("LOSER!!! TRY AGAIN");
    reset();
  }
});
$("#crystal2").on("click", function () {
  score = score + crystal2value;
  $("#score").text(score);
  $("#status").text("KEEP CLICKING!");
  if (score === startingNumber) {
    wins++;
    $("#wins").text(wins);
    $("#status").text("YOU WIN!");
    reset();
  }
  else if (score > startingNumber) {
    losses++;
    $("#losses").text(losses);
    $("#status").text("LOSER!!! TRY AGAIN");
    reset();
  }
});
$("#crystal3").on("click", function () {
  score = score + crystal3value;
  $("#score").text(score);
  $("#status").text("KEEP CLICKING!");
  if (score === startingNumber) {
    wins++;
    $("#wins").text(wins);
    $("#status").text("YOU WIN!");
    reset();
  }
  else if (score > startingNumber) {
    losses++;
    $("#losses").text(losses);
    $("#status").text("LOSER!!! TRY AGAIN");
    reset();
  }
});
$("#crystal4").on("click", function () {
  score = score + crystal4value;
  $("#score").text(score);
  $("#status").text("KEEP CLICKING!");
  if (score === startingNumber) {
    wins++;
    $("#wins").text(wins);
    $("#status").text("YOU WIN!");
    reset();
  }
  else if (score > startingNumber) {
    losses++;
    $("#losses").text(losses);
    $("#status").text("LOSER!!! TRY AGAIN");
    reset();
  }
});



//done with javascript and jQuery
// var startingNumber = Math.floor(Math.random() * (121 - 19) + 19);
// var crystal1value;
// var crystal2value;
// var crystal3value;
// var crystal4value;
// var score = 0;
// var wins = 0;
// var losses = 0;
// document.getElementById("target").innerHTML = startingNumber;
//
// console.log(startingNumber);
//
// // put in functions function
// function reset() {
//   startingNumber = Math.floor(Math.random() * (121 - 19) + 19);
//   crystal1value = Math.floor(Math.random() * (13 - 1) + 1);
//   crystal2value = Math.floor(Math.random() * (13 - 1) + 1);
//   crystal3value = Math.floor(Math.random() * (13 - 1) + 1);
//   crystal4value = Math.floor(Math.random() * (13 - 1) + 1);
//   score = 0;
//   document.getElementById("target").innerHTML = startingNumber;
//   document.getElementById("score").innerHTML = score;
// }
//
// reset();
// $("#crystal1").on("click", function () {
//   score = score + crystal1value;
//   document.getElementById("score").innerHTML = score;
//   document.getElementById("status").innerHTML = "KEEP CLICKING!";
//   if (score === startingNumber) {
//     wins++;
//     document.getElementById("wins").innerHTML = wins;
//     document.getElementById("status").innerText = "YOU WIN!";
//     reset();
//   }
//   else if (score > startingNumber) {
//     losses++;
//     document.getElementById("losses").innerHTML = losses;
//     document.getElementById("status").innerText = "LOSER!!! TRY AGAIN";
//     reset();
//   }
// });
// $("#crystal2").on("click", function () {
//   score = score + crystal2value;
//   document.getElementById("score").innerHTML = score;
//   document.getElementById("status").innerHTML = "KEEP CLICKING!";
//   if (score === startingNumber) {
//     wins++;
//     document.getElementById("wins").innerHTML = wins;
//     document.getElementById("status").innerText = "YOU WIN!";
//     reset();
//   }
//   else if (score > startingNumber) {
//     losses++;
//     document.getElementById("losses").innerHTML = losses;
//     document.getElementById("status").innerText = "LOSER!!! TRY AGAIN";
//     reset();
//   }
// });
// $("#crystal3").on("click", function () {
//   score = score + crystal3value;
//   document.getElementById("score").innerHTML = score;
//   document.getElementById("status").innerHTML = "KEEP CLICKING!";
//   if (score === startingNumber) {
//     wins++;
//     document.getElementById("wins").innerHTML = wins;
//     document.getElementById("status").innerText = "YOU WIN!";
//     reset();
//   }
//   else if (score > startingNumber) {
//     losses++;
//     document.getElementById("losses").innerHTML = losses;
//     document.getElementById("status").innerText = "LOSER!!! TRY AGAIN";
//     reset();
//   }
// });
// $("#crystal4").on("click", function () {
//   score = score + crystal4value;
//   document.getElementById("score").innerHTML = score;
//   document.getElementById("status").innerHTML = "KEEP CLICKING!";
//   if (score === startingNumber) {
//     wins++;
//     document.getElementById("wins").innerHTML = wins;
//     document.getElementById("status").innerText = "YOU WIN!";
//     reset();
//   }
//   else if (score > startingNumber) {
//     losses++;
//     document.getElementById("losses").innerHTML = losses;
//     document.getElementById("status").innerText = "LOSER!!! TRY AGAIN";
//     reset();
//   }
// });
