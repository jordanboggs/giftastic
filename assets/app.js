/*
 * G I F T A S T I C
 * Using GIPHY'S API
 * by Jordan Boggs
 * 2017 DU Coding Boot Camp
 */
$(document).ready(function(){
  var game = {
    buttons: ["cat","dog","rabbit","bird","capybara","llama","alpaca",
              "hedgehog","echidna","fox"],
  };

  var initialButtons = function() {
    game.buttons.forEach(element => {
      $("#buttons").append(`<button>${element}</button>`);
    });
  };

  initialButtons();
});
