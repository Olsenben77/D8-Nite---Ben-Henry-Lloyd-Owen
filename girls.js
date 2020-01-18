$(document).ready(function () {
  var location;
  var city;
  function findLocation(city, displayResults) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=10&sort=relevance&offset=0&lang=en_US&currency=USD&units=mi&query=" + city,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "97dd672a0cmshb1e6a6f2a428472p18d34ejsn1f6efb9b89b9"
      }
    }
    $.ajax(settings).done(function (response) {
      displayResults(response.data[0].result_object.location_id);
    });
  }
  function settings(id) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=USD&sort=recommended&lunit=km&limit=30&bookable_first=false&subcategory=36&location_id=" + id,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "97dd672a0cmshb1e6a6f2a428472p18d34ejsn1f6efb9b89b9"
      }
    }
  }
  $('#running-search').on('click', function () {
    city = $('#city-location').val();
    findLocation(city, showResults);
  });
  function showResults(id) {
    var check = $('#category').val();
    if (check === "2") {
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tripadvisor1.p.rapidapi.com/attractions/list?lang=en_US&currency=USD&sort=recommended&lunit=km&limit=30&bookable_first=false&subcategory=36&location_id=" + id,
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": "97dd672a0cmshb1e6a6f2a428472p18d34ejsn1f6efb9b89b9"
        }
      }
    }
    else {
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tripadvisor1.p.rapidapi.com/restaurants/list?lunit=mi&limit=30&prices_restaurants=10953%252C10955&restaurant_mealtype=10598%252C10599&currency=USD&lang=en_US&location_id=" + id,
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
          "x-rapidapi-key": "97dd672a0cmshb1e6a6f2a428472p18d34ejsn1f6efb9b89b9"
        }
      }
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
      var arrayData = $(".infoDiv");
      arrayData.empty();
      var row = $('<div class="row" id="top-row" />');
      row.empty();
      row.appendTo(arrayData);
      for (var i = 0; i < response.data.length; i++) {
        var line = response.data[i].location_id;
        if (i === 6 || i === 15 || i === 24) {
          i = i + 0;
        }
        else {
          var col = $('<div class="col-md-5" id="colm" />');
          var col2 = $('<div class="col-md-7" id="colm2" />');
          var insideCol = $('<div class="col-md-5" />');
          var insideCol2 = $('<div class="col-md-7" />');
          var restaurantList = $('<div class="row" id="box">');
          var restImg = $('<img id="photo" width="150" height="150" />');
          var restName = $('<h5 />');
          var restRating = $('<p class="array"><br>');
          var restAddres = $('<p class="array" />');
          var restNum = $('<p class="array" />');
          var link1 = $('<a></a>');
          var link2 = $('<a>view info...</a>');
          var status = $('<p id="status" />');
          var buttonsDiv = $("<div>");
          var placePicker = $("<button>");
          placePicker.text("Pick Place");
          buttonsDiv.attr("class", "placeBtns");
          placePicker.attr("class", "pick-this-place");
          placePicker.attr("place-name", response.data[i].name);
          if (response.data[i].photo) {
            placePicker.attr(
              "place-img",
              response.data[i].photo.images.original.url);
          }
          else {
            placePicker.attr(
              "place-img",
              "https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg");
          }
          placePicker.attr(
            "place-addr",
            response.data[i].address_obj.street1 +
            " " +
            response.data[i].address_obj.city
          );
          col.appendTo(restaurantList);
          restImg.appendTo(col);
          col2.appendTo(restaurantList);
          restName.appendTo(col2);
          restRating.appendTo(col2);
          restNum.appendTo(col2);
          restAddres.appendTo(col2);
          status.appendTo(col2);
          link1.appendTo(col2);
          link2.appendTo(col2);
          insideCol.appendTo(restaurantList);
          insideCol2.appendTo(restaurantList);
          status.appendTo(insideCol);
          if (response.data[i].photo) {
            restImg.attr("src", response.data[i].photo.images.small.url);
          }
          else {
            restImg.attr("src", "https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg");
          }
          restName.text(response.data[i].name);
          if (response.data[i].price_level) {
            restRating.text('Rating: ' + response.data[i].rating + ' | ' + response.data[i].price_level);
          }
          else {
            restRating.text('Rating: ' + response.data[i].rating + ' | Reviews: ' + response.data[i].num_reviews);
          }
          restNum.text('Phone : ' + response.data[i].phone);
          restAddres.text(response.data[i].address_obj.street1 + ' ' + response.data[i].address_obj.city);
          var web = response.data[i].website;
          var web2 = response.data[i].web_url;
          link1.attr("href", web)
          link1.text('Website | ');
          link2.attr("href", web2);
          //if the restaurant is open the text is blue, when it is close the text will be red
          console.log(response.data[i].open_now_text === 'Open Now');
          status.text(response.data[i].open_now_text);
          insideCol.append(placePicker, buttonsDiv);
          buttonsDiv.append(placePicker);
          restaurantList.append(insideCol, insideCol2);
          row.append(restaurantList);
        }
      }//for
    });//ajax
  }//function
  $('#searchList').on('click', function () {
    winebox.style.display = "none";
    $('#top-row').remove();
  });
  $('#searchWine').on('click', function () {
    winebox.style.display = "block";
    var musicData = $(".infoDiv");
    musicData.empty();
  });
  $(document).on("click", ".pick-this-place", function () {
    localStorage.removeItem("girlsplaceName");
    localStorage.removeItem("girlsplaceImg");
    localStorage.removeItem("girlsplaceAddress");
    localStorage.setItem("girlsplaceName", $(this).attr("place-name"));
    localStorage.setItem("girlsplaceImg", $(this).attr("place-img"));
    localStorage.setItem("girlsplaceAddress", $(this).attr("place-addr"));
    var resultsPage = $("<button>");
    resultsPage.text("Click Here To See Your Night");
    resultsPage.attr("onclick", "girlsresultPage()");
    resultsPage.attr("class", "resultBtn");
    $(this)
      .parent()
      .append(resultsPage);
  });
});
function girlsresultPage() {
  window.location.href = "girlsresults.html";
}