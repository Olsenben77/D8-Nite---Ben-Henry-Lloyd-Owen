$(document).ready(function() {
  var resultsBody = $(".results-body");
  var nameTag = $("<h3>");
  var imgTag = $("<img>");
  var venueTag = $("<h4>");
  var timeTag = $("<h4>");
  var placeTag = $("<h3>");
  var placeimgTag = $("<img>");
  var placeAddrTag = $("<h4>");
  var spacing = $("<hr>");

  var eventName = localStorage.getItem("eventName");
  var eventImg = localStorage.getItem("eventImg");
  var eventVenue = localStorage.getItem("eventVenue");
  var eventTime = localStorage.getItem("eventTime");
  var placeName = localStorage.getItem("placeName");
  var placeImg = localStorage.getItem("placeImg");
  var placeAddress = localStorage.getItem("placeAddress");

  nameTag.text(eventName);
  imgTag.attr("src", eventImg);
  imgTag.attr("style", "height: 300px; width: 300px;");
  venueTag.text(eventVenue);
  timeTag.text(eventTime);
  placeTag.text(placeName);
  placeimgTag.attr("src", placeImg);
  placeimgTag.attr("style", "height: 300px; width: 300px;");
  placeAddrTag.text(placeAddress);

  resultsBody.append(
    nameTag,
    venueTag,
    timeTag,
    imgTag,
    spacing,
    placeTag,
    placeAddrTag,
    placeimgTag
  );
});
