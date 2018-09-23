//array of players that will already be displayed
var players = ["LeBron James", "Rajon Rondo", "Lonzo Ball"];

//some things I will need for the api query
// api.giphy.com
// path /v1/gifs/search
//&apikey=TxAYO7DBs1rQn5cG173MESy9G7MtLztf



//displayPlayer function will rerender the html to display the proper content
function displayPlayer() {
    var player = $(".player-input").val();
    var queryURL = "http://api.giphy.com/v1/gifs/search?&q=" + player + "&limit=10&api_key=TxAYO7DBs1rQn5cG173MESy9G7MtLztf";

    console.log(player);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
console.log(response);


    });

};

function renderButtons() {

    
}
