var searchOn = false;
var searchCounter = 0;

$(document).ready (function() {

  function getData(search) {

    var gif = search;
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=E6dCnW33DP2LRdQtDPL320f0vdv8VOBA&rating=g";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(JSON.stringify(response));
    });

  }

  $('#submit').on("click", function() {
    console.log($('#giphy').val().trim());
  });

  $('#search').on("click", function() {
    searchOn = true;
  });

  $('body').on("click", function() {
    console.log(this);
    searchOn = false;
  });



  $(document).on("keypress", function(event) {
    var temp = String.fromCharCode(event.which);
    if(searchCounter < 25 && event.which !== 13) {
      $('#search').append(temp);
      searchCounter += 1;
    }
  });

  $(document).on("keydown", function(event) {
    var temp = $('#search').text();
    if(event.which === 8 && searchCounter > 0) {
      $('#search').text(temp.substring(0, temp.length-1));
      searchCounter -= 1;
    } else if (event.which === 13 && searchCounter > 0) {
      getData($('#search').text());
      $('#search').text("");
    }
  });

});
