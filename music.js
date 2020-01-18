$("#searchList").on("click", function() {
  winebox.style.display = "none";
  test.style.display = "block";
});
$("#searchWine").on("click", function() {
  test.style.display = "none";
  winebox.style.display = "block";
  $("#girlsInfo").remove();
});

$("#music-search").on("click", function() {
  musicApi();
});

function musicApi() {
  var musicInput = $("#musicSearch")
    .val()
    .trim();
  console.log(musicInput);
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + musicInput,
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "199f1e09a9mshdfab23e44228e4fp1b6d38jsn561dce2385d3"
    }
  };
  $.ajax(settings).done(function(response) {
    console.log(response);

    var musicData = $(".infoDiv");
    musicData.empty();

    for (var x = 0; x < response.data.length; ++x) {
      var musicListcard = $("<div>");
      var musicListcardbox = $("<div>");
      var musicName = $("<h4>");
      var musicImg = $("<img>");
      var buttonsDiv = $("<div>");
      var musicPicker = $("<button>");
      var spacing = $("<hr>");
      buttonsDiv.attr("class", "musicBtns");
      musicName.text(response.data[x].title);
      musicImg.attr("src", response.data[x].album.cover);
      musicImg.attr("style", "height: 140px; width: 140px;");

      musicPicker.text("Add Song To Playlist");
      musicPicker.attr("class", "pick-this-music");
      musicPicker.attr("music-title", response.data[x].title);
      musicPicker.attr("music-artist", musicInput);

      musicListcardbox.append(
        musicName,
        musicImg,
        musicPicker,
        buttonsDiv,
        spacing
      );
      buttonsDiv.append(musicPicker);

      musicListcard.append(musicListcardbox);
      musicData.append(musicListcard);
    }
  });
}

localStorage.removeItem("musicInfo");
var songList = [];

$(document).on("click", ".pick-this-music", function() {
  var songTitle = $(this).attr("music-title");
  var songArtist = $(this).attr("music-artist");

  songList.push(songTitle + " " + songArtist);

  var resultsPage = $("<button>");
  resultsPage.text("Click Here To See Your Night");
  resultsPage.attr("onclick", "girlsResultPage()");
  resultsPage.attr("class", "resultBtn");
  $(this)
    .parent()
    .append(resultsPage);

    localStorage.setItem("songsPicked", JSON.stringify(songList));
    console.log(songList);
});

function girlsResultPage() {
  window.location.href = "girlsresults.html";
}
