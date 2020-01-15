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

    var eventData = $(".infoList");
    eventData.empty();

    for (var x = 0; x < response._embedded.events.length; ++x) {
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
      eventListcard.attr("class", "example-1 scrollbar-custom")

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
  });
}

$(".searchBtn").on("click", function() {
  events();
});

function removeArrowsBars() {
  var hideNextArr = $("#next-arrow-btn");
  var hiddenPrevArr = $("#prev-arrow-btn");
  hideNextArr.attr("class", "hidden");
  hiddenPrevArr.attr("class", "hidden");
  var barsCard = $(".barsRest");
  barsCard.remove();
  var eventCard = $("#eventCard");
  eventCard.removeClass("hidden");

}

var nextSideBtn = document.getElementById("next-side-btn");
nextSideBtn.addEventListener("click", function() {
  // var carouselIndic = document.getElementById("carouselIndic");
  // console.log(carouselIndic.value);
  // if(carouselIndic.value === 1){
  //   console.log("1");
  // }
  // else{
  //   console.log("0");
  // }
  removeArrowsBars();
});
