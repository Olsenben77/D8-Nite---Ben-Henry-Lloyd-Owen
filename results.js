$(document).ready(function() {
  var resultsBody = $(".results-body");
  var nameTag = $("<h3>");
  var imgTag = $("<img>");
  var venueTag = $("<h4>");
  var timeTag = $("<h4>");

  var eventName = localStorage.getItem("eventName");
  var eventImg = localStorage.getItem("eventImg");
  var eventVenue = localStorage.getItem("eventVenue");
  var eventTime = localStorage.getItem("eventTime");

  nameTag.text(eventName);
  imgTag.attr("src", eventImg);
  imgTag.attr("style", "height: 300px; width: 300px;");
  venueTag.text(eventVenue);
  timeTag.text(eventTime);

  resultsBody.append(nameTag, imgTag, venueTag, timeTag);
});
