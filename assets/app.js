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

  var renderButtons = function() {
    $("#buttons").empty();

    game.buttons.forEach(element => {
      $("#buttons").append(`<button class="search-item">${element}</button>`);
    });
  };

  renderButtons();

  // This function handles events where a new animal is added
  $("#add-animal").click(function(event) {
    event.preventDefault();
    let animal = $("#animal-input").val().trim();

    game.buttons.push(animal);

    renderButtons();
  });

});
