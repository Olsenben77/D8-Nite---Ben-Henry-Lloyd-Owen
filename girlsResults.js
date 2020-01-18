$(document).ready(function() {
  var resultsBody = $(".results-body");
  var musicCard = $("<div>");
  var musicCardBody = $("<div>");
  var girlsplaceTag = $("<h3>");
  var girlsplaceimgTag = $("<img>");
  var girlsplaceAddrTag = $("<h4>");
  var spacing = $("<hr>");
  var musicarray = JSON.parse(localStorage.getItem("songsPicked"));

  var girlsplaceName = localStorage.getItem("girlsplaceName");
  var girlsplaceImg = localStorage.getItem("girlsplaceImg");
  var girlsplaceAddress = localStorage.getItem("girlsplaceAddress");

  girlsplaceTag.text(girlsplaceName);
  girlsplaceimgTag.attr("src", girlsplaceImg);
  girlsplaceimgTag.attr("style", "height: 300px; width: 300px;");
  girlsplaceAddrTag.text(girlsplaceAddress);
  musicCard.attr("class", "card example-1 scrollbar-ripe-malinka");
  musicCardBody.attr("class", "card-body");

  for (var x = 0; x < musicarray.length; ++x) {
    var musicTag = $("<h4>");
    console.log("for loop");
    musicTag.text(musicarray[x]);
    musicCardBody.append([musicTag, spacing]);
  }
  musicCard.append(musicCardBody);

  resultsBody.append([
    musicCard,
    spacing,
    girlsplaceTag,
    girlsplaceAddrTag,
    girlsplaceimgTag
  ]);
});
