$(document).ready(function () {
var cityInput;
var eventDate;

function events() {
  cityInput = $("#event-city-location")
    .val()
    .trim();
  eventDate = $("#event-date")
    .val()
    .trim();
  console.log(cityInput);
  console.log(eventDate);
  var queryURL =
    "https://app.ticketmaster.com/discovery/v2/events?apikey=CmSrewheOQ1GgmtfsovcAYtrADjZxAoI&locale=*&city=" +
    cityInput +
    "%20" +
    "&startDateTime=" +
    eventDate +
    "T00:00:00Z";
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
      console.log(x);
      console.log(response._embedded.events[x].name);
      console.log(response._embedded.events[x].dates.start.localDate);

      if (eventDate === response._embedded.events[x].dates.start.localDate) {
        var eventListcard = $("<div>");
        var eventListcardbox = $("<div>");
        var eventName = $("<h4>");
        var eventImg = $("<img>");
        var eventDate = $("<h5>");
        var eventTime = $("<h5>");
        var eventInfo = $("<h6>");
        var eventPicker = $("<button>");
        var spacing = $("<hr>");

        eventName.text(response._embedded.events[x].name);
        eventImg.attr("src", response._embedded.events[x].images[0].url);
        eventImg.attr("style", "height: 140px; width: 140px;");
        eventDate.text(response._embedded.events[x].dates.start.localDate);
        eventTime.text(response._embedded.events[x].dates.start.localTime);
        eventInfo.text(response._embedded.events[x].info);
        eventPicker.text("Pick Event");

        eventListcardbox.append(
          eventName,
          eventImg,
          eventDate,
          eventTime,
          eventInfo,
          eventPicker,
          spacing
        );
        eventListcard.append(eventListcardbox);
        eventData.append(eventListcard);
      }
    }
  });
}

$("#event-search").on("click", function() {
  events();
});


// cityInputEnterBtn.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     events();
//   }
// });
});