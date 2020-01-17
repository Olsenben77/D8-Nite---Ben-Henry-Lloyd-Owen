$(document).ready(function() {
  /*
    var apikey = 'fcd6ddf16c4b9a838af223d1e89e7098';

    var apiVersion = '/api/v2.1/';
    var city = 'Seattle';

    var urlCity = 'https://developers.zomato.com' + apiVersion + '/cities\?user-key\=$' + apikey + '\&q='+ city + 
    */
  var site =
    "https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&prices_restaurants=10953%252C10955&restaurant_mealtype=10598%252C10599&currency=USD&lang=en_US&location_id=293919";

  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://tripadvisor1.p.rapidapi.com/restaurants/list?restaurant_tagcategory_standalone=10591&lunit=km&restaurant_tagcategory=10591&limit=30&prices_restaurants=10953%252C10955&restaurant_mealtype=10598%252C10599&currency=USD&lang=en_US&location_id=60878",
    method: "GET",
    headers: {
      "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
      "x-rapidapi-key": "97dd672a0cmshb1e6a6f2a428472p18d34ejsn1f6efb9b89b9"
    }
  };

  $.ajax(settings).done(function(response) {
    console.log(response);

    var carBody = $("<div class='card-body'>");
    var name = response.data[0].name;
    console.log(response.data[0].name);

    var nameDiv = $("<p>").text(name);

    $("#rest").append(carBody);
  });

  function hide() {
    barsbox.style.display = "none";
  }
});
