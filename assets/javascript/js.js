$(document).ready (function() {

  function getData(search) {

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=E6dCnW33DP2LRdQtDPL320f0vdv8VOBA&rating=g";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      for(var i = 0; i < 10; i++) {
        var temp = $('<img>');
        temp.attr("src", response.data[i].images.original_still.url);
        temp.attr("class", "GIF");
        $('#results').append(temp);
        // console.log(response.data[0].images.original_still.url);
        // console.log(response.data[0].images.original.url);
      }
    });
  }

  $('#submit').on("click", function(event) {
    event.preventDefault();
    var temp = $('<button></button>');
    temp.text($('#search').val());
    temp.addClass("gifbutton");
    temp.css("width", "auto");
    temp.css("height", "auto");
    $('#buttons').append(temp);
    $('#search').val("");
  });

  $(document).on("click", ".gifbutton", function() {
    $('#results').empty();
    getData(this.innerHTML);
  });

  $(document).on("click", ".GIF", function() {
    if(this.getAttribute("src").includes("_s")) {
      this.setAttribute("src", this.getAttribute("src").replace("_s.gif", ".gif"));
    } else {
      this.setAttribute("src", this.getAttribute("src").replace(".gif", "_s.gif"));
    }
  });

});
