$(document).ready(function() {
  var location;
  var city;
  function findLocation(city, displayResults) {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=10&sort=relevance&offset=0&lang=en_US&currency=USD&units=mi&query=" +
        city,
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "97dd672a0cmshb1e6a6f2a428472p18d34ejsn1f6efb9b89b9"
      }
    };
    $.ajax(settings).done(function(response) {
      displayResults(response.data[0].result_object.location_id);
    });
  }
  $("#run-search").on("click", function() {
    city = $("#city-location").val();
    findLocation(city, showResults);
  });
  function showResults(id) {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://tripadvisor1.p.rapidapi.com/restaurants/list?lunit=mi&limit=30&prices_restaurants=10953%252C10955&restaurant_mealtype=10598%252C10599&currency=USD&lang=en_US&location_id=" +
        id,
      method: "GET",
      headers: {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "97dd672a0cmshb1e6a6f2a428472p18d34ejsn1f6efb9b89b9"
      }
    };
    $.ajax(settings).done(function(response) {
      console.log(response);
      var arrayData = $(".eventsInfo");
      arrayData.empty();
      var row = $('<div class="row" id="top-row" />');
      row.empty();
      row.appendTo(arrayData);
      for (var i = 0; i < response.data.length; i++) {
        var line = response.data[i].location_id;
        if (i === 6 || i === 15 || i === 24) {
          i = i + 0;
        } else {
          var col = $('<div class="col-md-5" id="colm" />');
          var col2 = $('<div class="col-md-7" id="colm2" />');
          var insideCol = $('<div class="col-md-5" />');
          var insideCol2 = $('<div class="col-md-7" />');
          var restaurantList = $('<div class="row" id="box">');
          var restImg = $('<img id="photo" width="150" height="150" />');
          //var space = $('<br>');
          var restName = $("<h5 />");
          var restRating = $('<p id="array"><br>');
          var restAddres = $('<p id="array" />');
          var restNum = $('<p id="array" />');
          var link1 = $("<a>Website |</a>");
          //var restWeb = $('<p id="array" />');
          var status = $('<p id="status" />');
          var cus = $('<p id="array" />');
          var spacing = $("<hr />");
          var enter = $("<br>");
          col.appendTo(restaurantList);
          restImg.appendTo(col);
          col2.appendTo(restaurantList);
          restName.appendTo(col2);
          restRating.appendTo(col2);
          restNum.appendTo(col2);
          restAddres.appendTo(col2);
          //restWeb.appendTo(col2);
          status.appendTo(col2);
          link1.appendTo(col2);
          insideCol.appendTo(restaurantList);
          insideCol2.appendTo(restaurantList);
          status.appendTo(insideCol);
          restImg.attr("src", response.data[i].photo.images.small.url);
          restName.text(response.data[i].name);
          restRating.text(
            "Rating: " +
              response.data[i].rating +
              " | " +
              response.data[i].price_level
          );
          restNum.text("Phone : " + response.data[i].phone);
          restAddres.text(
            response.data[i].address_obj.street1 +
              " " +
              response.data[i].address_obj.city +
              " " +
              response.data[i].address_obj.state
          );
          var web = response.data[i].website;
          //restWeb.text('Website |');
          link1.attr("href", web);
          //if the restaurant is open the text is blue, when it is closed the text will be red
          console.log(response.data[i].open_now_text === "Open Now");
          status.text(response.data[i].open_now_text);
          restaurantList.append(insideCol, insideCol2);
          row.append(restaurantList);
        }
      } //for
    }); //ajax
  } //function
  $("#searchEvents").on("click", function() {
    barsbox.style.display = "none";
    test.style.display = "block";
    $("#top-row").remove();
  });
  $("#searchBars").on("click", function() {
    test.style.display = "none";
    barsbox.style.display = "block";
    barsbox.style.display = "block";
    $(".eventsInfo").empty();
  });
});
