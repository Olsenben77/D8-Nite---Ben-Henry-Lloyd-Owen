var cityInput;

function events() {
  cityInput = $(".cityInput")
    .val()
    .trim();
  console.log(cityInput);
  var queryURL =
    "https://app.ticketmaster.com/discovery/v2/events?apikey=CmSrewheOQ1GgmtfsovcAYtrADjZxAoI&locale=*&city=" +
    cityInput +
    "%20";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    console.log(response._embedded.events.length);

    var eventData = $(".eventsInfo");
    eventData.empty();

    for (var x = 0; x < response._embedded.events.length; ++x) {
      var eventList = $("<div>");
      var eventName = $("<h4>");
      var eventImg = $("<img>");
      var eventDate = $("<h5>");
      var eventTime = $("<h5>");
      var eventInfo = $("<h6>");
      var spacing = $("<hr>");

      eventName.text(response._embedded.events[x].name);
      eventImg.attr("src", response._embedded.events[x].images[0].url);
      eventImg.attr("style", "height: 140px; width: 140px;");
      eventDate.text(response._embedded.events[x].dates.start.localDate);
      eventTime.text(response._embedded.events[x].dates.start.localTime);
      eventInfo.text(response._embedded.events[x].info);

      eventList.append(eventName, eventImg, eventDate, eventTime, eventInfo, spacing);
      eventData.append(eventList);

    }
  });
}

$(".searchBtn").on("click", function() {
  events();
});
