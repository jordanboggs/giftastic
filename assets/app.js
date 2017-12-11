/*
* G I F T A S T I C
* Using GIPHY'S API
* by Jordan Boggs
* 2017 DU Coding Boot Camp
*/
var buttons = ["cat","dog","rabbit","bird","capybara","llama","alpaca",
                "hedgehog","echidna","fox"];

var renderButtons = function() {
  $("#buttons").empty();

  buttons.forEach(element => {
    $("#buttons").append(`<button class="search-item" data-animal="${element}">${element}</button>`);
  });
};

renderButtons();

// This function handles events where a new animal is added
$(document).on("click", "#add-animal", function(event) {
  event.preventDefault();
  let animal = $("#animal-input").val().trim();

  buttons.push(animal);

  renderButtons();
});

// This function calls the GIPHY API to display animal gifs
// $(".search-item").click(function() {
$(document).on("click", ".search-item", function() {
  const animal = $(this).attr("data-animal");

  const queryURL = `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=xglemIPCq6dg9YlSR2vXBBkXTxbgyqUg&limit=10`;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    const results = response.data;

    for (let i = 0; i < results.length; i++) {
      $("#images").prepend(`
        <div class="result-item">
          <p>Rating: ${results[i].rating.toUpperCase()}</p>
          <img src="${results[i].images.fixed_height.url}">
        </div>
      `);
    }
  });
});
