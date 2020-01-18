$(document).ready(function() {
  var cityInput;
  var eventDate;

  function events() {
    cityInput = $("#event-city-location")
      .val()
      .trim();
    eventDate = $("#event-date")
      .val()
      .trim();
    var apiFormat = moment(eventDate).add(1, 'days').format("YYYY-MM-DD")

    var queryURL =
      "https://app.ticketmaster.com/discovery/v2/events?apikey=CmSrewheOQ1GgmtfsovcAYtrADjZxAoI&locale=*&startDateTime=" +
      apiFormat +
      "T00:00:00Z&endDateTime=" +
      apiFormat +
      "T23:59:59Z&city=" +
      cityInput;
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
        var eventListcard = $("<div>");
        var eventListcardbox = $("<div>");
        var eventName = $("<h4>");
        var eventImg = $("<img>");
        var eventTime = $("<h5>");
        var eventVenue = $("<h5>");
        var eventPicker = $("<button>");
        var spacing = $("<hr>");
        var eventlocalTime = moment(response._embedded.events[x].dates.start.localTime, 'HH:mm').format('hh:mm a');;

        eventName.text(response._embedded.events[x].name);
        eventImg.attr("src", response._embedded.events[x].images[0].url);
        eventImg.attr("style", "height: 140px; width: 140px;");
        eventTime.text(eventlocalTime);
        eventVenue.text(response._embedded.events[x]._embedded.venues[0].name);
        eventPicker.text("Pick Event");
        eventPicker.attr("class", "pick-this-event");
        eventPicker.attr("event-name", response._embedded.events[x].name);
        eventPicker.attr("event-img", response._embedded.events[x].images[0].url);
        eventPicker.attr("event-venue", response._embedded.events[x]._embedded.venues[0].name);
        eventPicker.attr("event-time", eventlocalTime);

        eventListcardbox.append(
          eventName,
          eventImg,
          eventVenue,
          eventTime,
          eventPicker,
          spacing
        );
        eventListcard.append(eventListcardbox);
        eventData.append(eventListcard);
      }
    });
  }

  $("#event-search").on("click", function() {
    events();
  });

  $(document).on("click",".pick-this-event", function(){
    console.log($(this).attr("event-name"));
    console.log($(this).attr("event-img"));
    console.log($(this).attr("event-venue"));
    console.log($(this).attr("event-time"));
  });
  // cityInputEnterBtn.addEventListener("keyup", function(event) {
  //   if (event.keyCode === 13) {
  //     event.preventDefault();
  //     events();
  //   }
  // });
});
