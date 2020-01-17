var musicInput = "Shrek";

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
});

//title and artist
// Data[0].album.cover;

for (var i = 0; x < 20; ++i) {}
