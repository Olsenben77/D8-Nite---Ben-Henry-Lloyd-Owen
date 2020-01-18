$(document).ready(function() {
  var resultsBody = $(".results-body");
  // var musicTag = $("<h4>");
  // var spacing = $("<hr>");
  // var musicTitle = localStorage.getItem("songsPicked");
  var girlsplaceTag = $("<h3>");
  var girlsplaceimgTag = $("<img>");
  var girlsplaceAddrTag = $("<h4>");
  var spacing = $("<hr>");

  var girlsplaceName = localStorage.getItem("girlsplaceName");
  var girlsplaceImg = localStorage.getItem("girlsplaceImg");
  var girlsplaceAddress = localStorage.getItem("girlsplaceAddress");

  girlsplaceTag.text(girlsplaceName);
  girlsplaceimgTag.attr("src", girlsplaceImg);
  girlsplaceimgTag.attr("style", "height: 300px; width: 300px;");
  girlsplaceAddrTag.text(girlsplaceAddress);

  resultsBody.append(
    // nameTag,
    // venueTag,
    // timeTag,
    // imgTag,
    // spacing,
    girlsplaceTag,
    girlsplaceAddrTag,
    girlsplaceimgTag,
    spacing
  );

  // for(var x = 0; musicTitle.length; ++x){
  //     musicTag.text(musicTitle[x]);
  //     resultsBody.append(musicTag, spacing);
  // }
});
